import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Tarefa, TarefasService } from '../../providers/tarefas-service';
import { Projeto, ProjetosService } from '../../providers/projetos-service';
import { TarefaPage } from '../tarefa/tarefa';

import * as moment from 'moment';

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {

  tarefas: any[] = [];
  projetos: Projeto[] = [];
  filtroTarefas: any = {};

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public ts: TarefasService,
    public ps: ProjetosService) {

    this.tarefas = ts.getTarefas();
    this.projetos = ps.getProjetos();
  }

  ionViewWillEnter() {
    this.tarefas.map(
      t => {
        for (let i = 0; i < this.projetos.length; i++) {
          if (this.projetos[i].codigo == t.codigoProjeto) {
            t.nomeProjeto = this.projetos[i].projeto;
            return t;
          }
        }
        t.nomeProjeto = '';
        return t;
      }
    );
  }

  selecionaTarefa(c: string) {
    let codigo = parseInt(c);
    this.navCtrl.push(TarefaPage, { novo: false, codigo: codigo });
  }

  novaTarefa() {
    this.navCtrl.push(TarefaPage, { novo: true });
  }

  limpaFiltros() {
    this.filtroTarefas = {};
    this.menuCtrl.close();
  }

  filtroProjeto(p: number): void {
    this.filtroTarefas = { projeto: p };
    this.menuCtrl.close();
  }

  filtroDias(d: string): void {
    console.dir(d);
    this.filtroTarefas = { dias: d };
    this.menuCtrl.close();
  }
}

@Pipe({
  name: 'filtro'
})
export class Filtro implements PipeTransform {
  transform(itens: any[], filtro: any): any {

    itens.sort((a, b) => a.data - b.data);

    if (filtro.projeto) {
      return itens.filter(item => item.codigoProjeto == filtro.projeto)
    }
    else if (filtro.dias) {
      let d;
      if (filtro.dias == 'h') {
        d = moment(new Date()).format('YYYY-MM-DD');
      }
      else {
        d = moment().add(filtro.dias, 'days').format('YYYY-MM-DD');
      }

      return itens.filter(item => moment(item.data).format('YYYY-MM-DD') <= d);
    }
    else {
      return itens;
    }
  }
}
