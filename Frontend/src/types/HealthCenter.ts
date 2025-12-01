export interface HealthCenter {
  id: string;
  name: string;
  address: string;
  distance: number; // km
  acceptsCheck: boolean;
  hours: string;
  tags: string[];
  lat: number;
  lng: number;
  image: string;
}
