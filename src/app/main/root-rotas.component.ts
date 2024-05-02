import { Routes } from '@angular/router';
import { PaginasInicioComponent } from '../apresentacao/paginas/inicio/inicio.component';
import { PaginasFilmesComponent } from '../apresentacao/paginas/filmes/filmes.component';
import { PaginasMusicasComponent } from '../apresentacao/paginas/musicas/musicas.component';
import { PaginasPodcastsComponent } from '../apresentacao/paginas/podcasts/podcasts.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: PaginasInicioComponent,
  },
  {
    path: 'filmes',
    component: PaginasFilmesComponent,
  },
  {
    path: 'musicas',
    component: PaginasMusicasComponent,
  },
  {
    path: 'podcasts',
    component: PaginasPodcastsComponent,
  },
];
