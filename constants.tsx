
import { Candidate, Specialty } from './types';

export const CANDIDATES: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    specialty: Specialty.APPOINTMENT_SETTER,
    experience: 5,
    hourlyRate: 15,
    rating: 4.9,
    bio: 'Cold calling specialist with a high conversion rate. I help brokers fill their calendars with qualified leads.',
    avatar: 'https://picsum.photos/id/64/200/200',
    badges: ['Top Rated', 'Expert Negotiator'],
    languages: ['English', 'Spanish']
  },
  {
    id: '2',
    name: 'David Chen',
    specialty: Specialty.SOCIAL_MEDIA,
    experience: 4,
    hourlyRate: 25,
    rating: 4.8,
    bio: 'Creating viral content for real estate listings. Expert in Instagram Reels and TikTok growth for agents.',
    avatar: 'https://picsum.photos/id/91/200/200',
    badges: ['Creative Mind'],
    languages: ['English', 'Mandarin']
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    specialty: Specialty.PERSONAL_ASSISTANT,
    experience: 7,
    hourlyRate: 20,
    rating: 5.0,
    bio: 'Dedicated PA with deep knowledge of transaction coordination and MLS management.',
    avatar: 'https://picsum.photos/id/65/200/200',
    badges: ['Top Rated Plus', 'Transaction Pro'],
    languages: ['English', 'Spanish']
  },
  {
    id: '4',
    name: 'James Wilson',
    specialty: Specialty.LEAD_GENERATOR,
    experience: 3,
    hourlyRate: 18,
    rating: 4.7,
    bio: 'Master of Facebook Ads and Zillow lead management. I focus on ROI-driven campaigns.',
    avatar: 'https://picsum.photos/id/103/200/200',
    badges: ['Ad Specialist'],
    languages: ['English']
  },
  {
    id: '5',
    name: 'Elena Gilbert',
    specialty: Specialty.VIRTUAL_ASSISTANT,
    experience: 6,
    hourlyRate: 12,
    rating: 4.9,
    bio: 'Highly organized VA skilled in CRM data entry, email management, and follow-ups.',
    avatar: 'https://picsum.photos/id/177/200/200',
    badges: ['Efficiency Master'],
    languages: ['English', 'Tagalog']
  },
  {
    id: '6',
    name: 'Marcus Thorne',
    specialty: Specialty.APPOINTMENT_SETTER,
    experience: 4,
    hourlyRate: 16,
    rating: 4.6,
    bio: 'Energetic outbound caller with a background in luxury real estate sales.',
    avatar: 'https://picsum.photos/id/209/200/200',
    badges: ['Relentless'],
    languages: ['English']
  }
];
