// Interface que define a estrutura dos dados do aluno.
// Serve como contrato de tipagem para o model do formulário e para a lista de alunos.
export interface Aluno {
    nome: string;          // Nome do aluno (obrigatório)
    media: number | null;  // Média do aluno (pode ser null enquanto não preenchida)
}