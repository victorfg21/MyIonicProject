import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { Tarefa, TarefasService } from '../../providers/tarefas-service';
import { Projeto, ProjetosService } from '../../providers/projetos-service';

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
      this.data = this.datepipe.transform(tarefa.data, 'yyyy-MM-dd');
    }
    else {
      this.codigoProjeto = this.projetos[0].codigoProjeto;
      this.descricao = '';
      this.prioridade = 3;
      this.data = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    }
  }

  alteraTarefa() {
    this.ts.alteraTarefa(this.codigoTarefa, this.codigoProjeto, this.descricao, new Date(this.data), this.prioridade);
    this.nacCtrl.pop();
  }

  excluiTarefa() {
    this.ts.excluiTarefa(this.codigoTarefa);
    this.nacCtrl.pop();
  }

  adicionaTarefa() {
    this.ts.adicionaTarefa(this.codigoProjeto, this.descricao, new Date(this.data), this.prioridade);
    this.nacCtrl.pop();
  }
}
