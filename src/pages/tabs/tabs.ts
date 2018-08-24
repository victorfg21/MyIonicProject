import { Component } from '@angular/core';
import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = TarefasPage;
    this.tab2 = ProjetosPage;
  }
}
