import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  resultMessage = '';

  checkCapicua(number: string) {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 10 || num > 99) {
      this.resultMessage = 'Por favor, ingrese un número de dos cifras válido.';
      return;
    }
    const isCapicua = number[0] === number[1];
    this.resultMessage = isCapicua ? 'Es capicúa' : 'No es capicúa';
  }
}
