import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/main/root.component';
import { appConfig } from './app/main/root-rotas.module';

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err)
);
