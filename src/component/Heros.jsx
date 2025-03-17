import React from 'react'
import { IoPlay } from 'react-icons/io5'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const Heros = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };
    const buttonVariant = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.8,
            },
        },
    };
    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };
    return (
        <div className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 '>
            <div className='md:w-1/2 space-y-6'>
                <motion.p initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={textVariant} className='text-xl'>___Innovation Requires Courage</motion.p>
                <motion.h1 initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={textVariant} className='text-5xl md:text-7xl font-bold'>Being Innovators Requires Courage</motion.h1>
                <motion.p initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={textVariant} className='md:text-xl'>Understanding your capacity for risk can guide your business into untapped opportunities, helping your negative growth.</motion.p>
            </div>
            <div className='flex space-x-5'>
                <motion.button initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={buttonVariant}className='px-5 py-3 rounded-full font-semibold bg-black text-white'>Book</motion.button>
                <motion.button className='flex space-x-4 items-center'>
                    <span className='w-8 h-8 flex justify-center items-center bg-black text-white rounded-full'>
                        {""}
                        <IoPlay />
                    </span>{""}
                    <span >Watch Video</span>
                </motion.button>
            </div>
            <div>
                <motion.img src="/src/assets/Hero.avif" alt="" initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={imageVariant}className='w-80 h-80 rounded-full' />
            </div>
        </div>
    )
}

export default Heros
