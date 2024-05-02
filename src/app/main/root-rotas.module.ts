import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './root-rotas.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
