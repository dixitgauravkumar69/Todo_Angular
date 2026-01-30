import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

 @Input() childTitle!: string;
}
