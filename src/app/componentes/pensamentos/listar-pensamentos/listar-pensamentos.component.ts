import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { Pensamento2Component } from "../pensamento2/pensamento2.component";
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, Pensamento2Component],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

  listaPensamentos: Pensamento[] = [];

  listaPensamentos1: Pensamento[] = [
    {
      id: 1,
      conteudo: "Angular",
      autoria: "Julio",
      modelo: "modelo1"
    },
    {
      id: 2,
      conteudo: "Angular2 conteudo grande",
      autoria: "Julio2",
      modelo: "modelo2"
    }
  ];

}
