import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  icon: LucideIcon;
  color: string;
}

export interface ReminderProps {
  title: string;
  content: string;
}
