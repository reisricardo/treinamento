import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './root.component.html',
  imports: [RouterOutlet],
})
export class RootComponent {
  constructor() {}
}
