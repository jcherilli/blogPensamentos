import { Pensamento } from './../pensamento';
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  //metodo para retornar string classe-lagura
  larguraPensamento(): String {
    if (this.pensamento.conteudo.length > 20) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
