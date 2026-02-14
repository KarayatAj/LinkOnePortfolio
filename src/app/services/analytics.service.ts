import { Injectable } from '@angular/core';

declare let gtag: Function;

export interface EventData {
    category: string;
    action: string;
    label?: string;
    value?: number;
}

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {

    constructor() { }

    trackEvent(eventName: string, eventDetails: any) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventDetails);
        } else {
            console.warn('Google Analytics is not loaded');
        }
    }

    trackSocialClick(platform: string, url: string) {
        // Map of platform names to specific event names
        const eventMappings: { [key: string]: string } = {
            'GitHub': 'click_github',
            'LinkedIn': 'click_linkedin',
            'Twitter': 'click_x',
            'Instagram': 'click_instagram',
            'Portfolio': 'click_mywork',
            'Topmate': 'click_topmate',
            'Medium': 'click_medium',
            'Apple Podcast': 'click_podcast'
        };

        // Use mapped name or fallback to dynamic generation
        const eventName = eventMappings[platform] || `click_${platform.toLowerCase().replace(/\s+/g, '_')}`;

        this.trackEvent(eventName, {
            event_category: 'Social Link',
            event_label: platform,
            destination_url: url
        });
    }
}
