import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Tarefa, TarefasService } from '../../providers/tarefas-service';
import { ProjetosService } from '../../providers/projetos-service';

@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html'
})
export class TarefaPage {
  codTarefa: number = 0;
  codProjeto: number = 0;
  nomeTarefa: string = "";
  data: Date;
  prioridade: number;
  novo: boolean = true;

  constructor(public nacCtrl: NavController,
    public navParams: NavParams,
    public ts: TarefasService,
    public alertCtrl: AlertController,
    public ps: ProjetosService) {

    this.novo = navParams.get('novo');
    this.codTarefa = navParams.get('codigo');

    if (!this.novo) {
      this.codTarefa = navParams.get('codigo');
      let tarefa = ts.getTarefa(this.codTarefa);

      this.codTarefa = tarefa.codigo;
      this.nomeTarefa = tarefa.descricao;
      this.data = tarefa.data;
      this.prioridade = tarefa.prioridade;
    }
  }

  alteraTarefa() {
    this.ts.alteraTarefa(this.codTarefa, this.nomeTarefa, this.data, this.prioridade);
    this.nacCtrl.pop();
  }

  excluiTarefa() {
    this.ts.excluiTarefa(this.codTarefa);
    this.nacCtrl.pop();
  }

  adicionaTarefa() {
    this.ts.adicionaTarefa(this.codProjeto, this.nomeTarefa, this.data, this.prioridade);
    this.nacCtrl.pop();
  }
}
