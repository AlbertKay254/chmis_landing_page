import React, { useMemo } from 'react';

import {motion} from "framer-motion";
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../components/Layout/ScrollAnimationWrapper';
import ButtonPrimary from '../components/misc/ButtonPrimary';


const Signup = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div>
      <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Want access to <strong>CHMIS</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Sign Up with your email and a password will be sent to you
                to grant you access to our chmis demo
              </p>
              { /* <ButtonPrimary>Sign Up</ButtonPrimary> */}
            </div>

            <div className="flex w-full">
              <motion.div className="h-full w-full rounded-xl" variants={scrollAnimation}>
                <div>
                  <form>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" name="email" required />
                  <ButtonPrimary type="submit">Sign Up</ButtonPrimary>
                </form>
              </div>
              </motion.div>
            </div>

          </motion.div>
     </div>
  );
};

export default Signup;