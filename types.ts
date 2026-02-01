
export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string; // Font Awesome class string
  color?: string; // Optional custom color for the icon
}

export interface ProfileData {
  name: string;
  bio: string;
  instagram: string;
  avatarUrl: string;
}
