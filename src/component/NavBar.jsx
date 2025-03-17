import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
function NavBar() {
  return (
    <div className='flex justify-between item-center w-4/5 m-auto py-5 '>
      <h1 className='text-3xl font-bold '>TofemTech</h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.1 }}
        className='hidden md:flex space-x-4 item-center text-lg'>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">Portfolio</a>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">Our Members</a>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">Career</a>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">AboutUs</a>
        </motion.li>
      </motion.ul>
      <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='px-5 py-2 border border-black hover:bg-violet-400 hover:text-white cursor-pointer rounded-full font-semibold'>
        Register
      </motion.button>
    </div>
  );
}

export default NavBar;
