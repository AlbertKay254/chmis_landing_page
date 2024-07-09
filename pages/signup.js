import React, { useMemo, useState } from 'react';

import {motion} from "framer-motion";
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../components/Layout/ScrollAnimationWrapper';
import ButtonPrimary from '../components/misc/ButtonPrimary';
//import nodemailer from 'nodemailer';
//import { SnackbarProvider, useSnackbar } from 'notistack';

const Signup = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
   // message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   const emailInput = document.getElementById('email').value;

  //   try {
  //     const response = await fetch('/api/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: emailInput }),
  //     });

  //     if (response.ok) {
  //       alert('Email sent successfully!');
  //     } else {
  //       alert('Failed to send email.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('An error occurred while sending the email.');
  //   }
  // };
  
  return (
    <div className='max-w-screen-xl mt-24 px-8 sm:px-8 xl:px-16 mx-auto'>
      <motion.div
            className="gap-8 py-6 sm:py-16 "
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-1 sm:row-start-2 ">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Want access to <strong>CHMIS</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-10">
                Sign Up with your email and a password will be sent to you
                to grant you access to our chmis demo
              </p>
              { /* <ButtonPrimary>Sign Up</ButtonPrimary> */}
            </div>

            <div className="flex w-full">
              <motion.div className="h-full w-full rounded-xl" variants={scrollAnimation}>
                <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-2">
                  <form onSubmit={handleSubmit}>
                  <label className="mb-2 font-bold text-black-600 mr-2 block" htmlFor="name">Facility Name:</label>
                  <input 
                    type="text"
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5 w-full sm:w-64 "
                    required />
                  <label className="mb-2 font-bold text-black-600 mr-2 block" htmlFor="email">Email:</label>
                  <input 
                    type="email"
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5 w-full sm:w-64"
                    required />
                  <div>
                    <ButtonPrimary className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-500" type="submit">Sign Up</ButtonPrimary>
                  </div>
                  
                </form>
              </div>
              </motion.div>   
            </div>

          </motion.div>
     </div>
  );
};

export default Signup;