import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_CONFIG } from '../../data/portfolio.config';
import { AnalyticsService } from '../../services/analytics.service';
import { SocialLink } from '../../data/portfolio.config';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css'
})
export class SocialLinksComponent {
  links = PORTFOLIO_CONFIG.socialLinks;

  constructor(private analytics: AnalyticsService) { }

  trackClick(link: SocialLink) {
    this.analytics.trackSocialClick(link.platform, link.url);
  }
}
