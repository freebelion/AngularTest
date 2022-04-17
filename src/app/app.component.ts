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

  deleteTestbank(tb = this.selectedTestbank) {
    if (tb) {
      let index = this.testbanks.indexOf(tb, 0);
      if (index > -1) {
        this.testbanks.splice(index, 1);
      }
      this.selectedTestbank = undefined;
    }
  }

  selectTestbank(tb: Testbank) {
    this.selectedTestbank = tb;
  }
}
