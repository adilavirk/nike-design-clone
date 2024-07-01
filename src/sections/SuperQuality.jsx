"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React, { useRef } from "react";
import { shoe8 } from "../../public/assets/images";
import { useScroll, motion, useTransform } from "framer-motion";

const SuperQuality = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-10vw", "0vw"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["10vw", "0vw"]);

  return (
    <motion.div ref={ref}>
      <section
        id="about-us"
        className="max-container w-full flex max-lg:flex-col items-center justify-between"
      >
        <motion.div
          className="flex flex-1 flex-col"
          style={{ opacity: textOpacity, x: textX }}
          initial={{ opacity: 0, x: "-10vw" }}
          animate={{
            opacity: 1,
            x: "0vw",
            transition: { delay: 0.4, duration: 0.8, ease: "backInOut" },
          }}
        >
          <h1 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super Quality</span> Shoes
          </h1>
          <p className="info-text mt-4 lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="info-text lg:max-w-lg mt-6">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-1 justify-center items-center"
          style={{ opacity: imageOpacity, x: imageX }}
          initial={{ opacity: 0, x: "10vw" }}
          animate={{
            opacity: 1,
            x: "0vw",
            transition: { delay: 0.4, duration: 0.8, ease: "backInOut" },
          }}
        >
          <Image
            src={shoe8}
            alt="product detail"
            width={570}
            height={522}
            className="object-contain"
          />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default SuperQuality;
