import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Projeto, ProjetosService } from '../../providers/projetos-service';
import { TarefasService} from '../../providers/tarefas-service';

@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html'
})
export class ProjetoPage {
  codProjeto: number = 0;
  nomeProjeto: string = "";
  novo: boolean = true;

  constructor(public nacCtrl: NavController,
    public navParams: NavParams,
    public ps: ProjetosService,
    public alertCtrl: AlertController,
    public ts: TarefasService) {

    this.novo = navParams.get('novo');
    this.codProjeto = navParams.get('codigo');

    if (!this.novo) {
      this.codProjeto = navParams.get('codigo');
      let projeto = ps.getProjeto(this.codProjeto);

      this.codProjeto = projeto.codigo;
      this.nomeProjeto = projeto.projeto;
    }
  }

  alteraProjeto() {
    this.ps.alteraProjeto(this.codProjeto, this.nomeProjeto);
    this.nacCtrl.pop();
  }

  excluiProjeto() {
    let tarefas = this.ts.getTarefasProjeto(this.codProjeto);

    if (tarefas.length > 0) {
      const alert = this.alertCtrl.create({
        title: 'Erro ao excluir',
        subTitle: 'Este projeto possui tarefas e, portanto, não pode ser excluído!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.ps.excluiProjeto(this.codProjeto);
      this.nacCtrl.pop();
    }
  }

  adicionaProjeto(){
    this.ps.adicionaProjeto(this.nomeProjeto);
    this.nacCtrl.pop();
  }
}
