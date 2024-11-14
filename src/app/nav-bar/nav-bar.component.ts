import { Component } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
