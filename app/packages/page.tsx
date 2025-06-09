"use client";
import MapMain from "@/components/map/mapMain";
import AllPackages from "@/components/packages/allPackages";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import MarginedComponent from "@/components/ui/marginedComponent";
import { Search } from "lucide-react";
import React from "react";
import Typewriter from "typewriter-effect";

const PackagesPage = () => {
  return (
    <PageLayout>
      <div className="">
        <img
          src={"/assets/image.jpg"}
          alt="Description of image"
          className="h-[60vh] w-screen object-cover relative"
        />
        <div className="bg-black/20 w-fit flex justify-center items-center h-48 px-6 md:px-10 lg:px-20 rounded-lg absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="heading text-center text-white">
            Top Places in <span className="text-[#FF9933]">In</span>
            <span className="text-white">di</span>
            <span className="text-[#138808]">a</span> to{" "}
            <Typewriter
              
              options={{
                strings: ["Travel", "Explore", "Discover"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
      <MarginedComponent>
        <AllPackages/>
      </MarginedComponent>
      {/* <MapMain /> */}
    </PageLayout>
  );
};

export default PackagesPage;
