"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { CITIES_DATA } from "@/content/places";
import MapViewController from "@/components/shared-utils/mapViewControler";
import CityCard from "@/components/map/cityCard";
import { CityData } from "@/types/places";

// Leaflet icon fix
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
  iconUrl: markerIcon.src ?? markerIcon,
  shadowUrl: markerShadow.src ?? markerShadow,
});

export default function MapMain() {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(CITIES_DATA[0]);
  const [expandedCities, setExpandedCities] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const copy = new Set(expandedCities);
    copy.has(id) ? copy.delete(id) : copy.add(id);
    setExpandedCities(copy);
  };



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-[60vh] mx-8">
      <div className="bg-white shadow-lg overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
          <h1 className="text-2xl font-bold">City Explorer</h1>
          <p className="text-blue-100 text-sm mt-1">Discover amazing places across India</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {CITIES_DATA.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              isSelected={selectedCity?.id === city.id}
              isExpanded={expandedCities.has(city.id)}
              onSelect={() => setSelectedCity(city)}
              onToggleExpand={() => toggleExpand(city.id)}
            />
          ))}
        </div>
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            Currently viewing:{" "}
            <span className="font-semibold text-blue-600">{selectedCity?.city}</span>
          </p>
          <p className="text-xs mt-1">{selectedCity?.places.length} places to explore</p>
        </div>
      </div>

      <div className="h-full col-span-2">
        <MapContainer
          center={selectedCity?.center ?? [20.5937, 78.9629]}
          zoom={5}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {selectedCity &&
            selectedCity.places.map((place) => (
              <Marker key={place.name} position={place.coords}>
                <Popup>
                  <strong>{place.name}</strong>
                  <br />
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  {place.description}
                </Popup>
              </Marker>
            ))}
          {selectedCity && <MapViewController center={selectedCity.center} />}
        </MapContainer>
      </div>
    </div>
  );
}
