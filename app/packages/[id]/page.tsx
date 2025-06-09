// pages/packages/[id].tsx
"use client";

import { PackageImage } from "@/components/packages/allPackages";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import MarginedComponent from "@/components/ui/marginedComponent";
import { detailedPackages } from "@/data/package";
import { CalendarDays, MapPin, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const MapMain = dynamic(() => import("@/components/map/mapMain"), {
  ssr: false,
  loading: () => <p className="p-10 text-center">Loading map...</p>,
});


export default function PackagePage() {
  const params = useParams();
  const id = params.id; // This is your dynamic route param

  const selectedPackage = detailedPackages.find((pkg) => pkg.id === id);

  if (!selectedPackage) {
    return (
      <div className="text-center py-20 text-red-600 font-bold text-xl">
        Package not found
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="">
        <img
          src={
            "https://t3.ftcdn.net/jpg/05/18/57/08/360_F_518570848_kHRJUloQ0A79DiD2MYdF8PnsgYK6pMZI.jpg"
          }
          alt="Description of image"
          className="h-[60vh] w-screen object-cover relative"
        />
        <div className="bg-black/20 w-fit flex justify-center items-center h-48 px-6 md:px-10 lg:px-20 rounded-lg absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="heading text-center text-white">
            {selectedPackage.title}
          </h1>
        </div>
      </div>
      <MarginedComponent>
        <div  className="section-margin space-y-6 md:space-y-8">
          <section>
            {/* <h1 className="heading text-center">
            {selectedPackage.title}
          </h1> */}
            <p className="paragraph text-center">
              {selectedPackage.description}
            </p>
            <div className="flex justify-center gap-4 flex-wrap mt-4">
              <Badge
                variant="outline"
                className="flex items-center gap-2 text-base"
              >
                <CalendarDays size={20} /> {selectedPackage.duration}
              </Badge>
              <Badge className="bg-cyan-200 text-black text-base">
                <MapPin size={16} className="mr-1" />
                {selectedPackage.locations.join(", ")}
              </Badge>
            </div>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="heading text-center flex items-center justify-center gap-3 mb-6">
              ⭐ Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
              {selectedPackage.highlights.map((item, i) => (
                <PackageImage key={i} image={'https://d26dp53kz39178.cloudfront.net/media/uploads/products/Jeep_Ride_Safari-3_TAP1A7o.jpg'} title={item} imageHeight="20rem"/>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="subheading text-center mb-6">
              Day-wise Itinerary
            </h2>
            <div className="space-y-6">
              {selectedPackage.itinerary.map((item, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.day}: {item.title}
                  </h3>
                  <p className="text-gray-700 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </MarginedComponent>
      <MapMain/>
    </PageLayout>
  );
}
