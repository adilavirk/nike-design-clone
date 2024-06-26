"use client";

import Button from "@/components/Button";
import { arrowRight } from "../../public/assets/icons";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import { bigShoe1 } from "../../public/assets/images";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 2, duration: 0.8, ease: "backInOut" },
        }}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap md:relative md:z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Image */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 2.4, duration: 0.8, ease: "backInOut" },
        }}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <Image
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
