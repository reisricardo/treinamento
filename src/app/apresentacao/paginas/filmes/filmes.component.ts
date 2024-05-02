import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/base/header/header.component';

@Component({
  standalone: true,
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  imports: [HeaderComponent],
})
export class PaginasFilmesComponent {}
