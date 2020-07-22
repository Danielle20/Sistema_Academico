import { Component } from '@angular/core';
import { aluno } from './aluno';
import { disciplina } from './disciplina';
 
import { turma } from './turma';
 
// Danielle da Silva Melo 19178
 
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Sistema Acadêmico';
 Turmas: turma []= [];
 codigo: any=null;
 disciplina_escolhida:disciplina = {codigo:null,nome:null};
 aluno_turma:aluno[] = [];
 aluno_escolhido: aluno;
 professor_escolhido:string ='';
 buscaTurma: number = null;

  //Array de disciplinas
 lista_disciplina:Array<disciplina> = [
   {codigo:1,nome:'Autômatos'},
   {codigo:2,nome:'Data Mining'},
   {codigo:3,nome:'Desenvolvimento Web'},
   {codigo:4,nome:'Banco de Dados'},
   {codigo:5,nome:'Estatística'},
   {codigo:6,nome:'Empreendedorismo'},];

   //Array de professores
   lista_professor: string [] = ['Roberto Claudino', 'João Bosco',
   'Laércio Baldochi', 'Melise', 'Hévila', 'Elizabete'
   ];

  //Array de alunos
   lista_alunos:Array<aluno> = [
     {nroMatric:19178,nome:'Danielle'},
     {nroMatric:22345,nome:'Patricia'},
     {nroMatric:36253,nome:'Fernanda'},
     {nroMatric:48474,nome:'Karen'},
     {nroMatric:52620,nome:'Laiza'},
     {nroMatric:69746,nome:'Thiago'},
     {nroMatric:74652,nome:'Rubens'},
     {nroMatric:80283,nome:'Jean'},
   ];
 
   // Função pra adicionar aluno na turma e não repetir
 addAluno(){
   let exist = false;
   for (let index = 0; index < this.aluno_turma.length; index++) {
     if (this.aluno_turma[index].nroMatric==this.aluno_escolhido.nroMatric){
       exist = true;
     }
   }
   if (exist==false) {
     this.aluno_turma.push(this.aluno_escolhido);
   }
 }

 // Função pra buscar turmas
 resultadoTurma: any;
 buscarTurmaPorId(){
   this.resultadoTurma = [];
   for (let index = 0; index < this.Turmas.length; index++) {
     if (this.Turmas[index].codigo == this.buscaTurma){
       this.resultadoTurma.push(this.Turmas[index]);
     }
   }
   if (this.resultadoTurma.length == 0) {
     alert("Turma não encontrada");
   }
 }

 MostrarTodasTurmas(){
  this.resultadoTurma= this.Turmas;
 }
 // Função pra salvar a turma se todos campos estiverem preenchidos (Dar F5 pra validar)
 fecharTurma(){
 if (this.aluno_turma.length >0 && this.professor_escolhido != '' && this.disciplina_escolhida.codigo != null && this.codigo !=null &&  this.codigo !='') {
 
   this.Turmas.push({codigo:this.codigo, discipTurma:this.disciplina_escolhida, professor:this.professor_escolhido, lista_alunos:this.aluno_turma});
   this.aluno_turma = [];
   this.codigo= null;
   this.disciplina_escolhida= {codigo:null,nome:null};
   this.professor_escolhido = '';
 } else {alert("Preencha os campos");
}
 
 }
}
 
