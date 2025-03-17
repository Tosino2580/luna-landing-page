import React from 'react';
import Image from "/src/assets/pricing.jpg"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
function Pricing() {
  const imageVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className=' py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 '>
      <div className=' md:w-full space-y-8 flex flex-col md:flex-row'>
        <div className=''>
          <h1 className='text-4xl md:text-7xl font-bolder md:font-bold'>Maximize your Efficiency with EPIC Inc.</h1>
          <h3 className='text-3xl md:text-5xl font-bolder md:font-bold'>$29,999.99</h3>
          <p className='md:text-2xl leading-8'>
            {""}
            We offer tailored virtual services for your business, supporting your team remotely so they can thrive
          </p>
        </div>
        <div className='w-full '>
          <motion.img src={Image} alt="" initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={imageVariant} className='w-full h-50 md:h-90 rounded-xl ' />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
