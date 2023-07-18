import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultId = 0;
  nome = '';
  adicionado = false;
  funcionarios: any[] = [];

  alterar(nome: any) {
    this.nome = nome.target.value;
  }

  adicionar() {
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultId,
      nome: this.nome
    });
  }

}
