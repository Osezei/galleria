import React from "react";
import Link from "next/link";
import { data } from "@/public/data";
import Image from "next/image";

const Hero = ({}) => {
  return (
    <section className="grid grid-cols-4 place-items-center gap-10">
      {data.map((item, index) => {
        return (
          <div key={index} className="relative">
            <Image
              src={`/${item.images.hero.large}`}
              width={310}
              height={250}
              alt={item.name}
              sizes=""
              className="overflow-hidden h-auto object-cover"
            />
            <div className="absolute bottom-[33px] left-[32px]">
              <p className="text-2xl font-bold text-white w-[246px]">
                {item.name}
              </p>
              <p className="text-[13px] font-normal opacity-[0.7528279423713684] text-white">
                {item.artist.name}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
