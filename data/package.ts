export const packages = [
  {
    imageURL: "/assets/packages/package1.png",
    title: "Himalayan Serenity",
    description:
      "Experience the tranquility of the Himalayas with our exclusive package.",
  },
  {
    imageURL: "/assets/packages/package1.png",
    title: "Himalayan Serenity",
    description:
      "Experience the tranquility of the Himalayas with our exclusive package.",
  },
  {
    imageURL: "/assets/packages/package1.png",
    title: "Himalayan Serenity",
    description:
      "Experience the tranquility of the Himalayas with our exclusive package.",
  },
  {
    imageURL: "/assets/packages/package1.png",
    title: "Himalayan Serenity",
    description:
      "Experience the tranquility of the Himalayas with our exclusive package.",
  },
  {
    imageURL: "/assets/packages/package1.png",
    title: "Himalayan Serenity",
    description:
      "Experience the tranquility of the Himalayas with our exclusive package.",
  },
  {
    imageURL: "/assets/packages/package1.png",
    title: "Himalayan Serenity",
    description:
      "Experience the tranquility of the Himalayas with our exclusive package.",
  },
 
 
];


// src/data/packages.ts

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  locations: string[];
  description: string;
  highlights: string[];
  itinerary: {
    day: string;
    title: string;
    detail: string;
  }[];
}

export const detailedPackages: TravelPackage[] = [
  {
    id: "golden-triangle",
    title: "Golden Triangle Tour of India",
    duration: "6 Days / 5 Nights",
    locations: ["Delhi", "Agra", "Jaipur"],
    description:
      "lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem 20 .",  
    highlights: [
      "Guided tour of Old & New Delhi",
      "Taj Mahal sunrise visit",
      "Amber Fort jeep ride",
      "Cultural dinner with local cuisine",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Delhi",
        detail:
          "Arrive and settle in. Evening free for leisure or exploring Connaught Place.",
      },
      {
        day: "Day 2",
        title: "Delhi City Tour",
        detail:
          "Tour Old and New Delhi including Red Fort, Qutub Minar, Lotus Temple, and India Gate.",
      },
      {
        day: "Day 3",
        title: "Delhi to Agra",
        detail:
          "Drive to Agra, visit Agra Fort, and enjoy Mehtab Bagh's sunset view of the Taj.",
      },
      {
        day: "Day 4",
        title: "Taj Mahal & Jaipur",
        detail:
          "Visit the Taj Mahal at dawn. Continue to Jaipur, stopping at Fatehpur Sikri.",
      },
      {
        day: "Day 5",
        title: "Jaipur Tour",
        detail:
          "Amber Fort, City Palace, Jantar Mantar, and shopping at Johari Bazaar.",
      },
      {
        day: "Day 6",
        title: "Back to Delhi",
        detail:
          "Return to Delhi or proceed to the airport for your onward journey.",
      },
    ],
  },
];
