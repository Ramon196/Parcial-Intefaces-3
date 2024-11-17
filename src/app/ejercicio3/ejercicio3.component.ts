import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  totalPrice: number | null = null;

  calculatePrice(quantity: string) {
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty < 0) return;
    const pricePerTire = qty >= 5 ? 700 : 800;
    this.totalPrice = qty * pricePerTire;
  }
}
