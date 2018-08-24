import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { ProjetosService } from '../providers/projetos-service';
import { TarefasService } from '../providers/tarefas-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TarefasPage,
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
    ProjetosPage,
    ProjetoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProjetosService,
    TarefasService
  ]
})
export class AppModule { }
