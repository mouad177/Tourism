import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import JapanFlag from '/SallaProject/src/assets/img/JapanFlag.png'
import Japan1 from '/SallaProject/src/assets/img/Japan1.jpg'
import Japan2 from '/SallaProject/src/assets/img/Japan2.jpg'
import NetherlandsFlag from '/SallaProject/src/assets/img/NetherlandsFlag.png'
import Netherlands1 from '/SallaProject/src/assets/img/Netherlands1.jpg'
import Netherlands2 from '/SallaProject/src/assets/img/Netherlands2.jpg'
import FranceFlag from '/SallaProject/src/assets/img/FranceFlag.png'
import France1 from '/SallaProject/src/assets/img/France1.jpg'
import France2 from '/SallaProject/src/assets/img/France2.jpg'
import plus from '/SallaProject/src/assets/icons/plus (3).png'

import shoppingCart from '/SallaProject/src/assets/icons/shopping-cart.png'
import { motion } from "framer-motion"

function Map() {

  return (
<>
<Header/>
<div  id='TouristInformationSection'  >
<div className='z-40'>
  <h3 id='title' className='flex justify-center font-bold text-black dark:text-white mt-10 translate-x-7 md:translate-x-0 translate-y-14'>الرئيسية - الخرائط السياحية</h3>

  <div id='Countrys' className='mt-20 gap-10 translate-x-4 md:translate-x-6  lg:translate-x-0'>


<Link to='/Japan' className='z-40' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div id="Japan" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#9b225fc6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='JapanFlag'>
  <img  src={JapanFlag} width={150} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg'>الخريـطة السياحيـة</p>
<p className=' text-white text-4xl mt-3'>اليابان</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={Japan1} width={120} alt="" />
  <img className='rounded-3xl' src={Japan2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>الخريـطة السياحيـة - اليابان</p>
<div id="price" className='flex flex-row-reverse items-center gap-4'>
  <p className='text-orange-400'>   ٩٩ ريال سعودي  </p>
  <p className='line-through text-black dark:text-white'>  ١٣٠ ريال سعودي </p>
</div>
<div id='cart'>
  <button   className='flex flex-row-reverse items-center gap-3 p-2 rounded-br-xl bg-blue-600 hover:bg-blue-800'>
<p className='text-white text-sm'>اضافة الى السلة</p>
<img className='bg-white rounded-full' src={plus} width={20} alt="" />


  </button>
</div>
</motion.div>

</Link>

<Link to='/Netherlands' className='z-50' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div id="Netherlands" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#3f4091c6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='NetherlandsFlag'>
  <img  src={NetherlandsFlag} width={150} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg'>الخريـطة السياحيـة</p>
<p className=' text-white text-4xl mt-3'>هولندا</p>

</div>


 </div>
<div className='flex justify-center space-x-3 mt-4'>
  <img className='rounded-3xl' src={Netherlands1} width={130} alt="" />
  <img className='rounded-3xl' src={Netherlands2} width={130} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>الخريـطة السياحيـة - هولندا</p>
<div id="price" className='flex flex-row-reverse items-center gap-4'>
  <p className='text-orange-400'>   ٩٩ ريال سعودي  </p>
  <p className='line-through text-black dark:text-white'>  ١٣٠ ريال سعودي </p>
</div>
<div id='cart'>
  <button   className='flex flex-row-reverse items-center gap-3 p-2 rounded-br-xl bg-blue-600 hover:bg-blue-800'>
<p className='text-white text-sm'>اضافة الى السلة</p>
<img className='bg-white rounded-full' src={plus} width={20} alt="" />


  </button>
</div>
</motion.div>

</Link>

<Link to='/France' className='z-40' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div id="France" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#1d62b7c6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='FranceFlag'>
  <img  src={FranceFlag} width={180} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg'>الخريـطة السياحيـة</p>
<p className=' text-white text-4xl mt-3'>فرنسا</p>

</div>


 </div>
<div className='flex justify-center space-x-3 mt-4'>
  <img className='rounded-3xl' src={France1} width={130} alt="" />
  <img className='rounded-3xl' src={France2} width={130} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>الخريـطة السياحيـة - فرنسا</p>
<div id="price" className='flex flex-row-reverse items-center gap-4'>
  <p className='text-orange-400'>   ٩٩ ريال سعودي  </p>
  <p className='line-through text-black dark:text-white'>  ١٣٠ ريال سعودي </p>
</div>
<div id='cart'>
  <button   className='flex flex-row-reverse items-center gap-3 p-2 rounded-br-xl bg-blue-600 hover:bg-blue-800'>
<p className='text-white text-sm'>اضافة الى السلة</p>
<img className='bg-white rounded-full' src={plus} width={20} alt="" />


  </button>
</div>
</motion.div>

</Link>







</div>










</div>
<div  className='translate-y-24 fixed right-[2%] hidden lg:flex z-50'>

<div className='flex flex-col items-center justify-center gap-5 border border-blue-600 p-10'>
<h3 className='font-semibold text-blue-300'>الفئات: </h3>


<ul className='items-center flex-col gap-8 text-xs hidden lg:flex z-50'>
  <Link to='/الصفحة-الرئيسية'className=' text-black dark:text-white font-bold dark:hover:text-cyan-300 duration-500 hover:text-cyan-300'>الصفحة الرئيسية</Link>
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

export default Map