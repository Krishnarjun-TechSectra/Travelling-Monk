"use client";
import { MapPin } from "lucide-react";
import { Place } from "../../types/places";

const PlaceCard = ({ place, isExpanded }: { place: Place; isExpanded: boolean }) => (
  <div className={`transition-all duration-300 ${isExpanded ? 'mb-4' : 'mb-2'}`}>
    <div className="flex items-center gap-2 mb-2">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span className="font-medium text-gray-800">{place.name}</span>
    </div>
    {isExpanded && (
      <div className="ml-6 space-y-2">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-24 object-cover rounded-lg shadow-sm"
          loading="lazy"
        />
        <p className="text-sm text-gray-600">{place.description}</p>
      </div>
    )}
  </div>
);

export default PlaceCard;