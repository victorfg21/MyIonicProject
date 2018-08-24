import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Tarefa, TarefasService } from '../../providers/tarefas-service';
import { Projeto, ProjetosService } from '../../providers/projetos-service';
import { TarefaPage } from '../tarefa/tarefa';


@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {

  tarefas: any[] = [];
  projetos: Projeto[] = [];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public ts: TarefasService,
    public ps: ProjetosService) {

    this.tarefas = ts.getTarefas();
    this.projetos = ps.getProjetos();

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
}
