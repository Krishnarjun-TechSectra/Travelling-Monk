export interface Place {
  name: string;
  coords: [number, number];
  image: string;
  description: string;
}

export interface CityData {
  id: string;
  city: string;
  center: [number, number];
  places: Place[];
  description: string;
}