import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class Tab1Page  {
  
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