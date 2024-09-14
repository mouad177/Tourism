import React, { useEffect } from 'react'
import Header from '../components/Header'
import Lottie from "lottie-react";
import emailTour from "/SallaProject/src/assets/emailTour.json";
import { motion } from "framer-motion"

import { Link } from 'react-router-dom';
function Contact() {

  return (
<>
<Header/>
<div id='TouristInformationSection'  >
<div className='z-40'>
  <h3 id='title' className='flex justify-center font-bold text-black dark:text-white mt-10 translate-x-9 md:translate-x-0 translate-y-14'>الرئيسية - اتصل بنا</h3>

  <section id='Contact'>
<motion.h3 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='text-black  dark:text-white font-extrabold text-center p-2 text-5xl md:text-6xl mt-14'>Contact Us</motion.h3>

  <div className='flex  flex-col-reverse md:flex-row items-center justify-center gap-2'>
<motion.div className='rounded-2xl' initial={{opacity:0,x:-100,rotate:30}} whileInView={{opacity:1,rotate:0,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1}} >  <Lottie  animationData={emailTour} style={{height:500,width:500}} />
</motion.div>
<form>
<div id="box-input" className='flex mt-9 flex-col gap-4 items-center justify-start z-30'>
<motion.div  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}} className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="name">Name</label>
<input required type="text" id='name' className='rounded-xl  p-[3px]' />
</motion.div>


<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}}  className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="phone">Phone</label>
<input required type='number' id='phone' className='rounded-xl p-[3px]' />
</motion.div>
<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}  className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="em">Email</label>
<input required type="text" id='em' className='rounded-xl p-[3px]' />
</motion.div>

<motion.textarea initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='rounded-xl dark:bg-[#3d3b3b] dark:text-white text-black p-3' required dir='rtl' placeholder='الرسالة' id='msg'></motion.textarea>
<motion.input initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}}  required type="submit" value='ارسال' className='p-2 rounded-2xl bg-red-400 text-white font-bold  hover:bg-red-700'/>
</div>

</form>

  </div>
</section>
    

</div>




<div  className='translate-y-24 fixed right-[2%] hidden lg:flex z-50'>

<div className='flex flex-col items-center justify-center gap-5 border border-blue-600 p-10'>
<h3 className='font-semibold text-blue-300'>الفئات: </h3>


<ul className='items-center flex-col gap-8 text-xs hidden lg:flex z-50'>
  <Link to='/الصفحة-الرئيسية'className=' text-black dark:text-white font-bold hover:text-cyan-300 dark:hover:text-cyan-300 duration-500'>الصفحة الرئيسية</Link>
<Link to='/معلومات-سياحية'className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>معلومات سياحية</Link>
<Link to='/خرائط-سياحية 'className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>خرائط سياحية</Link>
<Link to='/عروض' className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>عروض حصرية</Link>
<Link to='/خطة-سفر 'className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>خطة سفر</Link>
<Link to='/كل-المنتجات'className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>كل المنتجات</Link>
<Link to='/اتصل-بنا' className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>اتصل بنا</Link>


  </ul>



</div>


</div>

</div>


</>
  )
}

export default Contact