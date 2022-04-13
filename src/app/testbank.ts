import { Guid } from 'guid-typescript';
import { Question } from './question';

export class Testbank {
  private id: Guid;
  public name: string;
  public description: string;
  public questions: Array<Question>;
  public selectedQuestion: Question | undefined;

  constructor() {
    this.id = Guid.create();
    this.name = "Testbank " + this.id.toString().split('-')[0];
    this.description = "Testbank description";
    this.questions = [];
  }

  addQuestion() {
    this.questions.push(new Question);
  }

  selectQuestion(que: Question) {
    this.selectedQuestion = que;
  }
}
