"use client";
import Button from "@/components/Button";
import { arrowRight } from "../../public/assets/icons";
import Image from "next/image";
import { offer } from "../../public/assets/images";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const SpecialOffer = () => {
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
      <section className="flex justify-between items-center flex-wrap max-xl:flex-col gap-10">
        <motion.div
          style={{ opacity: textOpacity, x: textX }}
          initial={{ opacity: 0, x: "-10vw" }}
          animate={{
            opacity: 1,
            x: "0vw",
            transition: { delay: 0.4, duration: 0.8, ease: "backInOut" },
          }}
          className="flex flex-1 flex-col"
        >
          <h1 className="text-4xl font-palanquin font-bold">
            <span className="text-coral-red">Speacial </span>Offer
          </h1>
          <p className="mt-4 info-text">
            {" "}
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="flex flex-wrap gap-4 mt-11">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              textColor="text-slate-gray"
              borderColor="border-slate-gray"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: imageOpacity, x: imageX }}
          initial={{ opacity: 0, x: "10vw" }}
          animate={{
            opacity: 1,
            x: "0vw",
            transition: { delay: 0.4, duration: 0.8, ease: "backInOut" },
          }}
          className="flex-1"
        >
          <Image
            src={offer}
            alt="Shoe Promotion"
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default SpecialOffer;
