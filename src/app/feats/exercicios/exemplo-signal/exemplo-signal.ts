import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exemplo-signal',
  imports: [],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {

  protected idade = signal<number>(24)

  mudarValor() {
    this.idade.set(20)
  }

  incrementarIdade() {
    this.idade.update(atual => atual + 1)
  }

}
