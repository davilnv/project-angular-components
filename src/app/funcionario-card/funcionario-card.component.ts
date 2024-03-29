import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {
  @Input('obj') funcionario: any;

  // getClassesCss() {
  //   return ['badge', 'text-bg-primary'];
  // }

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  getEstilosCartao() {
    return {
      // 'border-width.px': this.funcionario.id,

      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

}
