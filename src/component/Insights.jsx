import React from 'react';
import Man from "/src/assets/randomMen.jpg"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { SiDatabricks, SiGoogleassistant } from 'react-icons/si';
function Insights() {
  const InsightData = [
    {
      title: "Productivity Enhancer",
      date: "Mar. 2025",
      icon: SiGoogleassistant,
      description: "Dynamic visibility tools built to drive engagement.",
    },
    {
      title: "Remote Assitance",
      date: "Jan. 2024",
      icon: SiDatabricks,
      description: "Professional support for teams operating from remote locations.",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }
    })
  }
  return (
    <div className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0'>
      <div className='w-1/3 space-y-4 '>
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-2xl font-bold w-50 md:w-100'>Industry Insights</motion.h2>
        <motion.p initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='w-90 sm:w-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non explicabo eos velit voluptates officiis, accusamus repudiandae temporibus nesciunt. Repellat.</motion.p>

        <div className='flex items-center space-x-2'>
          <img src={Man} alt="" className='w-12 h-12 rounded-full border-2' />
          <div>
            <h1 className='font-bold text-xl w-50 md:w-100'>Micheal Olise</h1>
            <p className='text-sm text-gray-700 '>CEO, Founder</p>
          </div>
        </div>
      </div>

      <div className='md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
        {InsightData.map((insight, index) => (
          <motion.div className='w-full p-4 border-2 border-white/40 rounded-xl space-y-4 ' key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
          >

            <div className='flex justify-between'>
              <div className='space-y-2'>
                <button className='p-3 rounded-full bg-violet-300 text-violet-800'>{insight.icon()}</button>
                <h1 className='text-bold-lg text-xl'>{insight.title}</h1>
              </div>
              <p>{insight.date}</p>
            </div>
            <p className='text-lg leading-loose text-gray-800'>{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Insights;
