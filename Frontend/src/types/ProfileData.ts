// src/data/profileData.ts

import { User, Phone,  Bell, Globe, Lock, Info,  HelpCircle, type LucideIcon } from "lucide-react";

// --- 1. Personal Information Data ---
export interface PersonalInfo {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  expectedDelivery: string;
  language?: 'EN' | 'FR';
}

export const userProfile: PersonalInfo = {
  fullName: "Marie Kamga",
  phone: "+237 677 123 456",
  email: "marie.kamga@email.cm",
  dob: "15 Mars 1995",
  expectedDelivery: "12 Mars 2025",
  language: 'EN', 
};

// --- 2. Menu Link Structure ---
export interface ProfileLink {
  label: string;
  icon: LucideIcon;
  section: "Preferences" | "Security" | "Help";
  path: string; // The route path for navigation
  action?: () => void;
}

export const profileLinks: ProfileLink[] = [
  // Preferences
  { label: "Notifications", icon: Bell, section: "Preferences", path: "/profile/notifications" },
  { label: "Langue", icon: Globe, section: "Preferences", path: "/profile/language" },

  // Security
  { label: "Changer le code PIN", icon: Lock, section: "Security", path: "/profile/change-pin" },
  { label: "Informations personnelles", icon: User, section: "Security", path: "/profile/personal-info" },

  // Help
  { label: "Centre d'aide", icon: HelpCircle, section: "Help", path: "/profile/help" },
  { label: "Contacter le support", icon: Phone, section: "Help", path: "/profile/support" },
  { label: "À propos de BabyBoom", icon: Info, section: "Help", path: "/profile/about" },
];