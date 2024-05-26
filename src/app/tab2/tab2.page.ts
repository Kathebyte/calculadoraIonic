import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  input: string = ''

  append(value: string) {
    this.input += value;
  }

  clear() {
    this.input = '';
  }

  calculate() {
    try {
      this.input = evaluate(this.input).toString();
    } catch (e) {
      this.input = 'Error';
    }
  }
}
