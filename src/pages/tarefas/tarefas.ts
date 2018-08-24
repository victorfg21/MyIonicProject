import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tarefa, TarefasService } from '../../providers/tarefas-service';


@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {

  tarefas: Tarefa[] = [];

  constructor(public navCtrl: NavController,
              public ts: TarefasService) {
    this.tarefas = ts.getTarefas();
  }

  selecionaTarefa(c: string) {
    //let codigo = parseInt(c);
    //this.navCtrl.push(ProjetoPage, { novo: false, codigo: codigo });
  }

  novaTarefa() {
    //this.navCtrl.push(ProjetoPage, { novo: true });
  }
}
