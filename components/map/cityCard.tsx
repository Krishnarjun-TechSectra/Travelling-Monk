"use client";
import { ChevronDown, ChevronRight, Eye } from "lucide-react";
import { CityData } from "../../types/places";
import PlaceCard from "./placeCard";

const CityCard = ({
  city,
  isSelected,
  isExpanded,
  onSelect,
  onToggleExpand,
}: {
  city: CityData;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: () => void;
  onToggleExpand: () => void;
}) => (
  <div
    className={`mb-2 rounded-lg transition-all duration-300 ${
      isSelected
        ? "bg-blue-50 border-2 border-blue-200 shadow-md"
        : "bg-white border border-gray-200 hover:bg-gray-50"
    }`}
  >
    <div
      className="p-4 cursor-pointer flex items-center justify-between"
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
        onToggleExpand();
      }}
    >
      <div className="flex-1">
        <h3
          className={`font-semibold ${
            isSelected ? "text-blue-800" : "text-gray-800"
          }`}
        >
          {city.city}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{city.description}</p>
        <div className="flex items-center gap-1 mt-2">
          <Eye className="w-3 h-3 text-gray-500" />
          <span className="text-xs text-gray-500">
            {city.places.length} places
          </span>
        </div>
      </div>
      <button
        className={`p-1 rounded-full transition-colors ${
          isSelected ? "hover:bg-blue-100" : "hover:bg-gray-100"
        }`}
      >
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
    {isExpanded && (
      <div className="px-4 pb-4 border-t border-gray-100">
        <div className="pt-3 space-y-2">
          {city.places.map((place) => (
            <PlaceCard key={place.name} place={place} isExpanded={isSelected} />
          ))}
        </div>
      </div>
    )}
  </div>
);

export default CityCard;
