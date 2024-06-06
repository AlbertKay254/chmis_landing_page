import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Patient and Module Dashboards",
  "Inpatient Ward Occupancy",
  "Patient Registration",
  "Lab Integration"
]

const modules = [
  "Inpatient/Outpatient",
  "Patient Registration and Administration",
  "Pharmacy Inventory & Store Management",
  "Inventory Management",
  "HR Management",
  "Theatre Management",
  "Radiology and Imaging",
  "Dental and Eye Clinic Module"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              className="rounded-lg"
              src="/assets/Illustration4.png"
              alt=""
              layout="responsive"
              quality={100}
              height={414}
              width={600}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Services and Features You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the features that we provide and have their
            own functionality for each module.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-start  w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          We Provide a Variety of System Modules You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the different modules in the system that
            provide the essential as well as optional functionality
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {modules.map((module, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={module}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {module}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full " variants={scrollAnimation}>
            <Image
              className="rounded-lg"
              src="/assets/dash2.png"
              alt="dashboard"
              layout="responsive"
              quality={100}
              height={550}
              width={700}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

    </div>
  );
};

export default Feature;
