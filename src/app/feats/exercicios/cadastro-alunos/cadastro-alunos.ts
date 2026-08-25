import { Component, inject, signal } from '@angular/core';
import { Aluno } from './aluno';
import { form, FormField, max, min, required } from '@angular/forms/signals';
import { CadastroAlunosService } from './cadastro-alunos-service';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [FormField],
  templateUrl: './cadastro-alunos.html',
  styleUrl: './cadastro-alunos.css',
})
export class CadastroAlunos {


  protected readonly cadastroAlunosService = inject(CadastroAlunosService);


  // Fonte da verdade
  // Signal que guarda o estado atual dos dados do formulário.
  // Qualquer alteração no formulário atualiza este signal automaticamente.
  protected alunoModel = signal<Aluno>({
    nome: '',
    media: null
  });

  // Cria a instância do formulário reativo baseado em signals.
  // O segundo parâmetro é uma função de configuração onde definimos as validações.  
  protected alunoForm = form(this.alunoModel, (s) => {
    // Campo nome: obrigatório
    required(s.nome, { message: 'O nome do aluno é obrigatório' });

    // Campo média: obrigatório + intervalo entre 0 e 10
    required(s.media, { message: 'A média é obrigatória' });
    min(s.media, 0, { message: 'Média não pode ser menor do que 0' });
    max(s.media, 10, { message: 'Média não pode ser maior do que 10' });
  });

  // Signal que armazena a lista de alunos já cadastrados
  // protected alunos = signal<Aluno[]>([]);

  // Método chamado no submit do formulário
  protected cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();

    // Lê o valor atual do model (já sincronizado com o formulário)
    const aluno = this.alunoModel();

    // Delega a função de adicionar o aluno na array para o service
    this.cadastroAlunosService.cadastrarAluno(aluno);

    // Limpa o model (volta ao estado inicial)
    this.alunoModel.set({
      nome: '',
      media: null
    });

    // Reseta o estado do formulário (touched, dirty, errors etc.)
    this.alunoForm().reset();
  }

}
