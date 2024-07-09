import React, { useMemo, useState } from 'react';
import { motion } from "framer-motion";
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../components/Layout/ScrollAnimationWrapper';
import ButtonPrimary from '../components/misc/ButtonPrimary';

const Signup = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [formData, setFormData] = useState({
    FirstName: '',
    lastName: '',
    Email: '',
    Facility: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('User added successfully!');
        setFormData({ FirstName: '', lastName: '', Email: '', Facility: '' });
      } else {
        alert('Failed to add user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div 
      style={{
      backgroundImage: 'url(/assets/bg9.png)',
      backgroundSize: 'cover',
      //backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      opacity: '90%',
      zindex: '-1'
    }}>
      <div 
      className='max-w-screen-xl px-8 sm:px-8 xl:px-16 mx-auto'>
      <motion.div
        className="gap-8 py-6 sm:py-16"
        variants={scrollAnimation}
      >
        <div className="flex flex-col justify-center items-start row-start-1 sm:row-start-2">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Want access to <strong className='text-blue-300'>CHMIS</strong>.
          </h1>
          <p className="text-black-600 mt-4 mb-10">
            Sign Up with your email and a password will be sent to your email
            to grant you access to our chmis demo.
          </p>
        </div>

        <div className="flex w-full">
          <motion.div className="h-full w-full rounded-xl" variants={scrollAnimation}>
            <div className="flex flex-col justify-center w-full items-start sm:row-start-2">
              <form onSubmit={handleSubmit}>
                <label className="mb-2 font-bold text-black-600 mr-2 block " htmlFor="FirstName">First Name:</label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5 w-full sm:w-64"
                  required
                />
                <label className="mb-2 font-bold text-black-600 mr-2 block " htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5 w-full sm:w-64"
                  required
                />
                <label className="mb-2 font-bold text-black-600 mr-2 block " htmlFor="Email">Email:</label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5 w-full sm:w-64"
                  required
                />
                <label className="mb-2 font-bold text-black-600 mr-2 block " htmlFor="Facility">Facility:</label>
                <input
                  type="text"
                  id="Facility"
                  name="Facility"
                  value={formData.Facility}
                  onChange={handleChange}
                  className="p-2 border border-blue-300 rounded mr-5 w-full sm:w-auto sm:mb-5 w-full sm:w-64"
                  required
                />
                <div>
                  <ButtonPrimary className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-500" type="submit">Sign Up</ButtonPrimary>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    </div>

  );
};

export default Signup;
