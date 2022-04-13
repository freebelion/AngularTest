import { Component, OnInit, Input } from '@angular/core';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { Testbank } from '../testbank';
import { Question } from '../question';

@Component({
  selector: 'app-testbank-detail',
  templateUrl: './testbank-detail.component.html',
  styleUrls: ['./testbank-detail.component.css']
})
export class TestbankDetailComponent implements OnInit {

  @Input() displayTestbank: Testbank | undefined;
  public selectedQuestion: Question | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
