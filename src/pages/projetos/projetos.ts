import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Projeto, ProjetosService } from '../../providers/projetos-service';
import { ProjetoPage } from '../projeto/projeto';

@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html'
})
export class ProjetosPage {

  projetos: Projeto[] = [];

  constructor(public ps: ProjetosService,
              public navCtrl: NavController) {
    this.projetos = ps.getProjetos();
  }

  selecionaProjeto(c: string) {
    let codigo = parseInt(c);
    this.navCtrl.push(ProjetoPage, {novo: false, codigo: codigo });
  }

  novoProjeto(){
    this.navCtrl.push(ProjetoPage, {novo: true});
  }
}
