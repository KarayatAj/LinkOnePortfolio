import { Component } from '@angular/core';
import { PORTFOLIO_CONFIG } from '../../data/portfolio.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  about = PORTFOLIO_CONFIG.about;
}
