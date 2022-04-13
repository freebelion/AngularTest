import { Component } from '@angular/core';
import { Testbank } from './testbank';
import { TestbankDetailComponent } from './testbank-detail/testbank-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Soru Bankası';

  public testbanks: Array<Testbank>;
  public selectedTestbank: Testbank | undefined;

  constructor() {
    this.testbanks = [];
  }

  addTestbank() {
    this.testbanks.push(new Testbank);
  }

  selectTestbank(tb: Testbank) {
    this.selectedTestbank = tb;
  }
}
