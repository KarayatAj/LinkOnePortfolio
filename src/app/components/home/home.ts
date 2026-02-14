import { Component } from '@angular/core';
import { PORTFOLIO_CONFIG } from '../../data/portfolio.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  profile = PORTFOLIO_CONFIG.profile;
}
