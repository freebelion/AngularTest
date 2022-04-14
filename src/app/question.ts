import { Guid } from 'guid-typescript';
import { Choice } from './choice';

export class Question {
  private id: Guid;
  public htmlContent: string;
  public colClass:string;
  public choices: Array<Choice>;
  public selectedChoice: Choice | undefined;

  constructor() {
    this.id = Guid.create();
    this.htmlContent = "Question <b>" + this.id.toString().split('-')[0] + "</b>";
    this.colClass = "col";
    this.choices = [];
  }

  addChoice() {
    this.choices.push(new Choice);
  }

  selectChoice(cho: Choice) {
    this.selectedChoice = cho;
  }

  deleteChoice(cho = this.selectedChoice) {
    if (cho) {
      let index = this.choices.indexOf(cho, 0);
      if (index > -1) {
        this.choices.splice(index, 1);
      }
    }
  }

  setCol(cw: string) {
    this.colClass = cw;
  }
}
