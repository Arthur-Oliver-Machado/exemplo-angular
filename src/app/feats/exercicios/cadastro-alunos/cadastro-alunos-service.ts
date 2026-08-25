import { Service, signal } from '@angular/core';
import { Aluno } from './aluno';

@Service()
export class CadastroAlunosService {

    alunos = signal<Aluno[]>([]);

    cadastrarAluno(aluno: Aluno) {
        this.alunos.update(valor => [...valor, aluno]);
    }

}
