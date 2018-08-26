import { Injectable } from '@angular/core';
import * as moment from 'moment';

export class Tarefa {
  codigo: number;
  codigoProjeto: number;
  descricao: string;
  data: Date;
  prioridade: number; //1 (alta), (2 média),  3 (baixa)
}

@Injectable()
export class TarefasService {
  tarefas: Tarefa[] = [
    {
      codigo: 1,
      codigoProjeto: 1,
      descricao: 'Pagar conta de luz',
      data: moment('2018-08-25', 'YYYY-MM-DD').toDate(),//new Date(2018, 7, 23),
      prioridade: 1
    },
    {
      codigo: 2,
      codigoProjeto: 2,
      descricao: 'Entregar relatórios',
      data: moment('2018-08-26', 'YYYY-MM-DD').toDate(),//new Date(2018, 7, 28),
      prioridade: 1
    },
    {
      codigo: 3,
      codigoProjeto: 2,
      descricao: 'Contratar um desenvolvedor web',
      data: moment('2018-09-30', 'YYYY-MM-DD').toDate(),//new Date(2018, 8, 30),
      prioridade: 3
    },
    {
      codigo: 4,
      codigoProjeto: 2,
      descricao: 'Planeja uma campanha',
      data: moment('2018-09-01', 'YYYY-MM-DD').toDate(),//new Date(2018, 8, 1),
      prioridade: 2
    },
  ];

  ultimoCodigo: number = 4;

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  getTarefa(codigo: number): Tarefa {
    for (let i = 0; this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codigo) {
        return this.tarefas[i];
      }
    }
    return null;
  }

  getTarefasProjeto(codigoProjeto: number): Tarefa[] {
    return this.tarefas.filter(
      i => i.codigoProjeto = codigoProjeto
    );
  }

  alteraTarefa(codigo: number, codigoProjeto: number, descricao: string, data: Date, prioridade: number): void {
    for (let i = 0; this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codigo) {
        this.tarefas[i].codigoProjeto = codigoProjeto;
        this.tarefas[i].descricao = descricao;
        this.tarefas[i].data = data;
        this.tarefas[i].prioridade = prioridade;
        break;
      }
    }
  }

  excluiTarefa(codigo: number): void {
    for (let i = 0; this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codigo) {
        this.tarefas.splice(i, 1);
        break;
      }
    }
  }

  adicionaTarefa(cdProjeto: number, descTarefa: string, dtTarefa: Date, prioridadeTarefa: number): void {
    this.ultimoCodigo++;
    this.tarefas.push({
      codigo: this.ultimoCodigo,
      codigoProjeto: cdProjeto,
      descricao: descTarefa,
      data: dtTarefa,
      prioridade: prioridadeTarefa
    });
  }
}
