import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  totalCost: number | null = null;

  calculateCost(minutes: string) {
    const mins = parseInt(minutes, 10);
    if (isNaN(mins) || mins < 0) return;
    this.totalCost = mins <= 5 ? 10 : 10 + (mins - 5) * 2;
  }
}
