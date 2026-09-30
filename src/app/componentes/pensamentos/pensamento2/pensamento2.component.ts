import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento2',
  standalone: true,
  imports: [],
  templateUrl: './pensamento2.component.html',
  styleUrl: './pensamento2.component.css'
})
export class Pensamento2Component {
  
  pensamento = {
    conteudo: "pensamento2",
    autoria: "sem @Input()",
    modelo: "modelo2"
  }

}
