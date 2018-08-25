import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { TarefasService } from '../providers/tarefas-service';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { ProjetosService } from '../providers/projetos-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TarefasPage,
    TarefaPage,
    ProjetosPage,
    ProjetoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TarefasPage,
    TarefaPage,
    ProjetosPage,
    ProjetoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProjetosService,
    TarefasService
  ]
})
export class AppModule { }
