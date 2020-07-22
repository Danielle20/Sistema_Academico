import { aluno } from './aluno';
import { disciplina } from './disciplina';
export class turma{

    codigo: number;
    discipTurma: disciplina;
    professor: string;
    lista_alunos: Array<aluno>;
}