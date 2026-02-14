export interface SocialLink {
    platform: string;
    url: string;
    icon: string; // We can use simple text or SVG paths later, for now let's use text or class names if we add a library
    label: string;
}

export interface Profile {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string; // Placeholder or local path
    bannerUrl: string; // Placeholder or local path
}

export interface PortfolioConfig {
    profile: Profile;
    socialLinks: SocialLink[];
    about: {
        description: string;
    };
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
    profile: {
        name: "Your name",
        title: "Your title",
        bio: "Your bio",
        avatarUrl: "avatar_vector.png",
        bannerUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    about: {
        description: "Your description"
    },
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "your-linkedin-url",
            icon: "fab fa-linkedin",
            label: "Connect professionally"
        },
        {
            platform: "GitHub",
            url: "your-github-url",
            icon: "fab fa-github",
            label: "Check out my code"
        },
        {
            platform: "Twitter",
            url: "your-twitter-url",
            icon: "fab fa-twitter",
            label: "Follow my updates"
        },
        {
            platform: "Instagram",
            url: "your-instagram-url",
            icon: "fab fa-instagram",
            label: "Life behind the screens"
        },
        {
            platform: "Portfolio",
            url: "your-portfolio-url",
            icon: "fas fa-globe",
            label: "View my work"
        },
        {
            platform: "Topmate",
            url: "your-topmate-url",
            icon: "fas fa-user-friends",
            label: "Book a mentorship session"
        },
        {
            platform: "Medium",
            url: "your-medium-url",
            icon: "fab fa-medium",
            label: "Read my articles"
        },
        {
            platform: "Apple Podcast",
            url: "your-apple-podcast-url",
            icon: "fas fa-podcast",
            label: "Listen to my podcast"
        }
    ]
};
