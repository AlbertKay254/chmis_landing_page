import React, { useMemo } from 'react';

import {motion} from "framer-motion";
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../components/Layout/ScrollAnimationWrapper';
import ButtonPrimary from '../components/misc/ButtonPrimary';
//import nodemailer from 'nodemailer';
//import { SnackbarProvider, useSnackbar } from 'notistack';

const Signup = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   const emailInput = document.getElementById('email').value;

  //   // Create a Nodemailer transporter
  //   const transporter = nodemailer.createTransport({
  //     service: 'Outlook', // e.g., 'Gmail'
  //     auth: {
  //       user: 'jmuhlanga@chak.or.ke',
  //       pass: '@Wr8xsd6k',
  //     },
  //   });

  //   // Construct the email
  //   const mailOptions = {
  //     from: 'jmuhlanga@chak.or.ke',
  //     to: 'itinterns@chak.or.ke',
  //     subject: 'New Sign-Up',
  //     text: `User with email ${emailInput} signed up.`,
  //   };

  //   // Send the email
  //   try {
  //     await transporter.sendMail(mailOptions);
  //     console.log('Email sent successfully!');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // }
  
  return (
    <div className='max-w-screen-xl mt-24 px-8 sm:px-8 xl:px-16 mx-auto'>
      <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 "
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-1 sm:row-start-2 ">
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
                <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-2">
                  <form >
                  <label className="mb-2 font-bold text-black-600 mr-2 block" htmlFor="email">Email:</label>
                  <input 
                    type="text"
                    id="email" 
                    name="email" 
                    className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5"
                    required />
                  <ButtonPrimary className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-500" type="submit">Sign Up</ButtonPrimary>
                </form>
              </div>
              </motion.div>
            </div>

          </motion.div>
     </div>
  );
};

export default Signup;