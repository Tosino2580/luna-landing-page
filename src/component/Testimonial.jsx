import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Girl from "/src/assets/randomGirl.jpg"
import Boy from "/src/assets/randomGuy.jpg"
import Woman from "/src/assets/randomWomen.jpg"
import Man from "/src/assets/randomMen.jpg"
function Testimonial() {
  const testmVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  const testimonialData = [
    {
      image: Man,
      name: "Micheal Olise",
      position: "Founder",
      feedback: "Their assistance has streamlined our operations offering technical expertise whenever we need it",
    },
    {
      image: Woman,
      name: "Celine Caramel",
      position: "Creative Lead",
      feedback: "we've leveraged their service to manage our remote workforce, and it has been transformative",
    },
    {
      image: Boy,
      name: "John Howard",
      position: "Operations Manager",
      feedback: "The virtual support syatem has allowed us to scale efficiently and handle complex task effortlessly",
    },
    {
      image: Girl,
      name: "Alice Woods",
      position: "Marketing Manager",
      feedback: "The virtual support syatem has allowed us to scale efficiently and handle complex task effortlessly",
    },
  ]
  return (
    <div className='p-10 bg-white/40  '>
      <div className='w-4/5 m-auto space-y-8 '>
        <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className='space-y-5'>
          <h1 className='text-center text-lg'>____Client Reviews</h1>
          <h2 className='text-sm md:text-xl md:font-semibold items-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Quos  sit veritatis obcaecati reprehenderit,  placeat voluptatum. Nihil,  possimus fugit.</h2>
        </motion.div>
      </div>

      <div className='grid md:grid-cols-4 gap-4 py-10'>
        {testimonialData.map((testimonial, index) => (
          <motion.div initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={testmVariant} key={index} className='p-5 space-y-5 border border-black rounded-lg flex flex-col items-center'>
            <div className='flex items-center space-x-2'>
              <img src={testimonial.image} alt="" className='w-16 h-16 rounded-full border-2' />
              <div>
                <h1 className='font-bold text-lg'>{testimonial.name}</h1>
                <p className='text-sm text-gray-400'>{testimonial.position}</p>
              </div>
            </div>
            <p className='text-lg text-center'>{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
