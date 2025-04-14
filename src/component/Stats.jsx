import React from 'react';
import Pic from "/src/assets/Stat.avif"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
function Stats() {
  const imageVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};
  return (
    <div className='py-10 bg-white/40'>
      <div className='w-4/5  m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
        <div className='w-full md:w-1/3'>
          <motion.img src={Pic} alt="" initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={imageVariant} className='w-full rounded-bl-4xl rounded-tr-4xl'/>
        </div>
        <div className='md:w-1/2 space-y-8'>
          <h1 className='text-4xl md:text-6xl font-bolder'>Over 30,000</h1>
          <p className='md:text-4xl font-bold'>
            {""}
            Remote Professional provides essential services to businesses globally, delivering support from any location.
          </p>
          <div className='flex space-x-3'>
            <div className='space-y-5'>
              <div className='flex items-center space-x-2 '>
                <span className='p-3 rounded-full bg-violet-400 text-violet-800'>
                  <FaChartLine />
                </span>
                <h1>Data Validation </h1>
              </div>
              <p>
                {""}
                Ask your AI-powered assistant anything. Your virtual companion is here to help you stay ahead
              </p>
            </div>
            <div className='space-y-5'>
              <div className='flex items-center space-x-2 '>
                <span className='p-3 rounded-full bg-violet-400 text-violet-800'>
                  <FaChartLine />
                </span>
                <h1>Optimize Efficiency </h1>
              </div>
              <p>
                {""}
                Get expert assistance for technical or performance-related challenges, all managed remotely
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
