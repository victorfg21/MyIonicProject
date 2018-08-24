import { Injectable } from '@angular/core';

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
      data: new Date(2018, 8, 23),
      prioridade: 1
    },
    {
      codigo: 2,
      codigoProjeto: 2,
      descricao: 'Entregar relatórios',
      data: new Date(2018, 8, 25),
      prioridade: 1
    },
    {
      codigo: 3,
      codigoProjeto: 2,
      descricao: 'Contratar um desenvolvedor web',
      data: new Date(2018, 9, 30),
      prioridade: 3
    },
    {
      codigo: 4,
      codigoProjeto: 2,
      descricao: 'Planeja uma campanha',
      data: new Date(2018, 9, 5),
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

  /*alteraTarefa(codigo: number, descricao: string, data: Date, prioridade: number): void {
    for (let i = 0; this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codigo) {
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
  }*/
}
