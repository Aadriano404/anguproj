import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="head">the best houses available for you!!</div> `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
