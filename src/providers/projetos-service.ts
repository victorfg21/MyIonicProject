import { Injectable } from '@angular/core';

export class Projeto {
  codigo: number;
  projeto: string;
}

@Injectable()
export class ProjetosService {
  projetos: Projeto[] = [
    { codigo: 1, projeto: 'Casa' },
    { codigo: 2, projeto: 'Trabalho' }
  ];

  ultimoCodigo: number = 2;

  getProjetos(): Projeto[] {
    return this.projetos
  }

  getProjeto(codigo: number): Projeto {
    for (let i = 0; this.projetos.length; i++) {
      if (this.projetos[i].codigo == codigo) {
        return this.projetos[i];
      }
    }
    return null;
  }

  alteraProjeto(codigo: number, nome: string): void{
    for (let i = 0; this.projetos.length; i++) {
      if (this.projetos[i].codigo == codigo) {
        this.projetos[i].projeto = nome;
        break;
      }
    }
  }

  excluiProjeto(codigo: number): void {
    for (let i = 0; this.projetos.length; i++) {
      if (this.projetos[i].codigo == codigo) {
        this.projetos.splice(i, 1);
        break;
      }
    }
  }

  adicionaProjeto(nome: string): void {
    this.ultimoCodigo++;
    this.projetos.push({
      codigo : this.ultimoCodigo,
      projeto : nome
    });
  }
}
