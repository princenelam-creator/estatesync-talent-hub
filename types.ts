
export enum Specialty {
  APPOINTMENT_SETTER = 'Appointment Setter',
  PERSONAL_ASSISTANT = 'Personal Assistant',
  SOCIAL_MEDIA = 'Social Media Specialist',
  LEAD_GENERATOR = 'Lead Generator',
  VIRTUAL_ASSISTANT = 'Virtual Assistant'
}

export interface Candidate {
  id: string;
  name: string;
  specialty: Specialty;
  experience: number;
  hourlyRate: number;
  rating: number;
  bio: string;
  avatar: string;
  badges: string[];
  languages: string[];
}

export type Page = 'home' | 'book' | 'contact';
