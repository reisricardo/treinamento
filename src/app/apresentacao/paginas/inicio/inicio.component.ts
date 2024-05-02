import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/base/header/header.component';

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [HeaderComponent],
})
export class PaginasInicioComponent {}
