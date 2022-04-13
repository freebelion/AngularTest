import { Guid } from 'guid-typescript';
import { Choice } from './choice';

export class Question {
  private id: Guid;
  public htmlContent: string;
  public choices: Array<Choice>;

  constructor() {
    this.id = Guid.create();
    this.htmlContent = "Question <b>" + this.id.toString().split('-')[0] + "</b>";
    this.choices = [];
  }

  addChoice() {
    this.choices.push(new Choice);
  }
}
