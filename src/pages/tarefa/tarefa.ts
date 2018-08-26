import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { Tarefa, TarefasService } from '../../providers/tarefas-service';
import { Projeto, ProjetosService } from '../../providers/projetos-service';
import * as moment from 'moment';

@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html'
})
export class TarefaPage {
  codigoTarefa: number;
  codigoProjeto: number;
  descricao: string;
  data: string;
  prioridade: number;
  novo: boolean = true;

  projetos: any[] = [];

  constructor(public nacCtrl: NavController,
    public navParams: NavParams,
    public datepipe: DatePipe,
    public ts: TarefasService,
    public alertCtrl: AlertController,
    public ps: ProjetosService) {

    this.novo = navParams.get('novo');
    this.projetos = ps.getProjetos();

    if (!this.novo) {
      this.codigoTarefa = navParams.get('codigo');
      let tarefa = ts.getTarefa(this.codigoTarefa);

      this.codigoProjeto = tarefa.codigoProjeto;
      this.descricao = tarefa.descricao;
      this.prioridade = tarefa.prioridade;
      this.data = moment(tarefa.data).format('YYYY-MM-DD').toString();
      console.dir(this.data);
      //console.dir(tarefa.data);
    }
    else {
      this.codigoProjeto = this.projetos[0].codigoProjeto;
      this.descricao = '';
      this.prioridade = 3;
      this.data = moment().format('YYYY-MM-DD').toString();
      console.dir(this.data);
    }
  }

  alteraTarefa() {
    console.dir(new Date(this.data));
    this.ts.alteraTarefa(this.codigoTarefa, this.codigoProjeto, this.descricao, moment(this.data, 'YYYY-MM-DD').toDate(), this.prioridade);
    this.nacCtrl.pop();
  }

  excluiTarefa() {
    this.ts.excluiTarefa(this.codigoTarefa);
    this.nacCtrl.pop();
  }

  adicionaTarefa() {
    this.ts.adicionaTarefa(this.codigoProjeto, this.descricao, moment(this.data, 'YYYY-MM-DD').toDate(), this.prioridade);
    this.nacCtrl.pop();
  }
}
