import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  resultMessage = '';

  decomposeNumber(number: string) {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 100 || num > 999) {
      this.resultMessage = 'Por favor, ingrese un número de tres cifras válido.';
      return;
    }
    const unidades = num % 10;
    const decenas = Math.floor((num / 10) % 10);
    const centenas = Math.floor(num / 100);
    this.resultMessage = `Centenas: ${centenas}, Decenas: ${decenas}, Unidades: ${unidades}`;
  }
}