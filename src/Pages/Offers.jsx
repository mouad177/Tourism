import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import RussiaFlag from '/SallaProject/src/assets/img/RussiaFlag.png'
import Russia1 from '/SallaProject/src/assets/img/Russia1.jpg'
import Russia2 from '/SallaProject/src/assets/img/Russia2.jpg'
import BahrainFlag from '/SallaProject/src/assets/img/BahrainFlag.png'
import Bahrain1 from '/SallaProject/src/assets/img/Bahrain1.jpg'
import Bahrain2 from '/SallaProject/src/assets/img/Bahrain2.jpg'
import CanadaFlag from '/SallaProject/src/assets/img/CanadaFlag.png'
import Canada1 from '/SallaProject/src/assets/img/Canada1.jpg'
import Canada2 from '/SallaProject/src/assets/img/Canada2.jpg'
import plus from '/SallaProject/src/assets/icons/plus (3).png'

import shoppingCart from '/SallaProject/src/assets/icons/shopping-cart.png'
import { motion } from "framer-motion"

function Offers() {

  return (
<>
<Header/>
<div id='TouristInformationSection'  >
<div className='z-40'>
  <h3 id='title' className='flex justify-center font-bold text-black dark:text-white mt-10 translate-x-9 md:translate-x-0 translate-y-14'>الرئيسية - عروض حصرية</h3>
  <div id='Countrys' className='mt-20 gap-10 translate-x-10  lg:translate-x-0'>


<Link to='/Russia' className='z-40' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div id="Russia" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#482795c6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='RussiaFlag'>
  <img  src={RussiaFlag} width={150} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg max-w-[200px]'>عرض روسيا - كل المعلومات + الخريطة السياحية</p>
<p className=' text-white text-4xl mt-3'>روسيا</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={Russia1} width={120} alt="" />
  <img className='rounded-3xl' src={Russia2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>عرض روسيا - كل المعلومات + الخريطة السياحية</p>
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


<Link to='/Bahrain' className='z-40' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div id="Bahrain" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#941d54c6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='BahrainFlag'>
  <img  src={BahrainFlag} width={150} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg max-w-[200px]'>عرض البحرين - كل المعلومات + الخريطة السياحية</p>
<p className=' text-white text-4xl mt-3'>البحرين</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={Bahrain1} width={120} alt="" />
  <img className='rounded-3xl' src={Bahrain2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>عرض البحرين - كل المعلومات + الخريطة السياحية</p>
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
<Link to='/Canada' className='z-40' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div id="Canada" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#893e40c6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='CanadaFlag'>
  <img  src={CanadaFlag} width={150} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg max-w-[200px]'>عرض كندا - كل المعلومات + الخريطة السياحية</p>
<p className=' text-white text-4xl mt-3'>كندا</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={Canada1} width={120} alt="" />
  <img className='rounded-3xl' src={Canada2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>عرض كندا - كل المعلومات + الخريطة السياحية</p>
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

export default Offers