"use client";

import PopularProductCard from "@/components/PopularProductCard";
import { products } from "@/constants";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const PopularProducts = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-10vw", "0vw"]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["10vw", "0vw"]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section id="products" className="max-container max-sm:mt-12">
        <motion.div
          className="flex flex-col justify-start gap-5"
          style={{ opacity: textOpacity, x: textX }}
          initial={{ opacity: 0, x: "-10vw" }}
          animate={{
            opacity: 1,
            x: "0vw",
            transition: { delay: 0.4, duration: 0.8, ease: "backInOut" },
          }}
        >
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg text-slate-500 font-montserrat mt-2">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
          style={{ opacity: cardsOpacity, y: cardsY }}
          initial={{ opacity: 0, y: "10vw" }}
          animate={{
            opacity: 1,
            y: "0vw",
            transition: { delay: 0.4, duration: 0.8, ease: "backInOut" },
          }}
        >
          {products?.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default PopularProducts;
