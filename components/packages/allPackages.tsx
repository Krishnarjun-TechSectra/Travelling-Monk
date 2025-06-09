import Link from "next/link";
import React from "react";

const AllPackages = () => {
  return (
    <div className="grid grid-cols-1 md:cols-2 lg:grid-cols-3 gap-6 section-margin">
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 1"
        cols={2}
      />
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 2"
        cols={1}
      />
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 3"
        cols={1}
      />
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 3"
        cols={1}
      />
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 3"
        cols={1}
      />
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 3"
        cols={1}
      />
      <PackageImage
        image="https://cdn.kimkim.com/files/a/images/cc9607a46d5f664e98870978e7c9501ce29d5df8/original-9e632e9a23d108a8e2175b65d6199580.jpg"
        title="Package 3"
        cols={2}
      />
    </div>
  );
};

type PackageImageProps = {
  image: string;
  title: string;
  cols?: number;
  imageHeight?: string;
};

export const PackageImage: React.FC<PackageImageProps> = ({
  image,
  title,
  cols,
  imageHeight,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg group col-span-${cols} ${
        imageHeight ? `h-[${imageHeight}]` : "h-[25rem]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="object-cover group-hover:scale-110 transition-transform duration-500 h-full w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-3 ">
        <h3 className="text-white font-semibold text-lg hover:underline">
          <Link target='_blank' href="/packages/golden-triangle">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default AllPackages;
