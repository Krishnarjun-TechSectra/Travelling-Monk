import { CityData } from "../types/places";

export const CITIES_DATA: CityData[] = [
  {
    id: "delhi",
    city: "Delhi",
    center: [28.6139, 77.209],
    description: "The vibrant capital of India, rich in history and culture",
    places: [
      {
        name: "India Gate",
        coords: [28.6129, 77.2295],
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop",
        description: "War memorial arch and iconic landmark"
      },
      {
        name: "Red Fort",
        coords: [28.6562, 77.241],
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
        description: "Historic fortified palace of Mughal emperors"
      },
      {
        name: "Lotus Temple",
        coords: [28.5535, 77.2588],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Architectural marvel shaped like a lotus flower"
      }
    ]
  },
  {
    id: "mumbai",
    city: "Mumbai",
    center: [19.076, 72.8777],
    description: "The commercial capital and Bollywood's home",
    places: [
      {
        name: "Gateway of India",
        coords: [18.9218, 72.8347],
        image: "https://images.unsplash.com/photo-1595655391199-724f4dd2e2d8?w=400&h=300&fit=crop",
        description: "Iconic arch monument overlooking the Arabian Sea"
      },
      {
        name: "Marine Drive",
        coords: [18.9432, 72.8224],
        image: "https://images.unsplash.com/photo-1595564630807-83bbbc7e4770?w=400&h=300&fit=crop",
        description: "The Queen's Necklace - Mumbai's scenic promenade"
      }
    ]
  },
  {
    id: "rishikesh",
    city: "Rishikesh",
    center: [30.0869, 78.2676],
    description: "The Yoga Capital of the World, nestled in Himalayan foothills",
    places: [
      {
        name: "Laxman Jhula",
        coords: [30.1265, 78.3089],
        image: "https://images.unsplash.com/photo-1545146344-e4612d8aec3f?w=400&h=300&fit=crop",
        description: "Iconic suspension bridge over the Ganges"
      },
      {
        name: "Triveni Ghat",
        coords: [30.1037, 78.2941],
        image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop",
        description: "Sacred confluence of three holy rivers"
      },
      {
        name: "Beatles Ashram",
        coords: [30.1265, 78.3174],
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        description: "Historic meditation retreat where Beatles stayed"
      }
    ]
  },
  {
    id: "darjeeling",
    city: "Darjeeling",
    center: [27.041, 88.2663],
    description: "The Queen of Hills, famous for tea gardens and mountain views",
    places: [
      {
        name: "Tiger Hill",
        coords: [27.0469, 88.2777],
        image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
        description: "Sunrise viewpoint with panoramic Himalayan views"
      },
      {
        name: "Darjeeling Himalayan Railway",
        coords: [27.0410, 88.2663],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "UNESCO World Heritage toy train"
      },
      {
        name: "Peace Pagoda",
        coords: [27.0370, 88.2570],
        image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop",
        description: "Buddhist temple promoting world peace"
      }
    ]
  },
  {
    id: "goa",
    city: "Goa",
    center: [15.2993, 74.124],
    description: "Tropical paradise with beautiful beaches and Portuguese heritage",
    places: [
      {
        name: "Baga Beach",
        coords: [15.5557, 73.7537],
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
        description: "Popular beach destination with vibrant nightlife"
      },
      {
        name: "Basilica of Bom Jesus",
        coords: [15.5005, 73.9115],
        image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop",
        description: "UNESCO World Heritage baroque church"
      }
    ]
  },
  {
    id: "jaipur",
    city: "Jaipur",
    center: [26.9124, 75.7873],
    description: "The Pink City, showcasing royal Rajasthani architecture",
    places: [
      {
        name: "Hawa Mahal",
        coords: [26.9239, 75.8267],
        image: "https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop",
        description: "Palace of Winds with intricate pink sandstone facade"
      },
      {
        name: "Amer Fort",
        coords: [26.9855, 75.8513],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Magnificent hilltop fort with stunning architecture"
      },
      {
        name: "City Palace",
        coords: [26.9255, 75.8235],
        image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop",
        description: "Royal residence showcasing Mughal and Rajasthani architecture"
      }
    ]
  }
];
