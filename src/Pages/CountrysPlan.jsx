import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import QatarFlag from '/SallaProject/src/assets/img/QatarFlag.png'
import doha from '/SallaProject/src/assets/img/doha.jpg'
import doha2 from '/SallaProject/src/assets/img/doha2.jpg'
import MoroccoFlag from '/SallaProject/src/assets/img/MoroccoFlag.png'
import tangier from '/SallaProject/src/assets/img/tangier.jpg'
import chefchaouen from '/SallaProject/src/assets/img/chefchaouen.jpg'
import SaudiArabiaFlag from '/SallaProject/src/assets/img/SaudiAabiaFlag.png'
import SaudiArabia from '/SallaProject/src/assets/img/SaudiArabia.jpg'
import SaudiArabia2 from '/SallaProject/src/assets/img/SaudiArabia2.jpg'
import emiratesFlag from '/SallaProject/src/assets/img/emiratesFlag.png'
import emiratesAirpalne from '/SallaProject/src/assets/img/emiratesAirpalne.jpg'
import dubai from '/SallaProject/src/assets/img/dubai.jpg'
import TurkeyFlag from '/SallaProject/src/assets/img/TurkeyFlag.png'
import Turkey1 from '/SallaProject/src/assets/img/Turkey1.jpg'
import Turkey2 from '/SallaProject/src/assets/img/Turkey2.jpg'
import ItalyFlag from '/SallaProject/src/assets/img/ItalyFlag.png'
import Italy1 from '/SallaProject/src/assets/img/Italy1.jpg'
import Italy2 from '/SallaProject/src/assets/img/Italy2.jpg'
import AmericaFlag from '/SallaProject/src/assets/img/AmericaFlag.png'
import America1 from '/SallaProject/src/assets/img/America1.jpg'
import America2 from '/SallaProject/src/assets/img/America2.jpg'
import KuwaitFlag from '/SallaProject/src/assets/img/KuwaitFlag.png'
import Kuwait1 from '/SallaProject/src/assets/img/Kuwait1.jpg'
import Kuwait2 from '/SallaProject/src/assets/img/Kuwait2.jpg'
import MalaysiaFlag from '/SallaProject/src/assets/img/MalaysiaFlag.png'
import Malaysia1 from '/SallaProject/src/assets/img/Malaysia1.jpg'
import Malaysia2 from '/SallaProject/src/assets/img/Malaysia2.jpg'
import JapanFlag from '/SallaProject/src/assets/img/JapanFlag.png'
import Japan1 from '/SallaProject/src/assets/img/Japan1.jpg'
import Japan2 from '/SallaProject/src/assets/img/Japan2.jpg'
import NetherlandsFlag from '/SallaProject/src/assets/img/NetherlandsFlag.png'
import Netherlands1 from '/SallaProject/src/assets/img/Netherlands1.jpg'
import Netherlands2 from '/SallaProject/src/assets/img/Netherlands2.jpg'
import FranceFlag from '/SallaProject/src/assets/img/FranceFlag.png'
import France1 from '/SallaProject/src/assets/img/France1.jpg'
import France2 from '/SallaProject/src/assets/img/France2.jpg'
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

function CountrysPlan() {

  return (
<>
<Header/>
<div id='TouristInformationSection'  >
<div className='z-40'>
  <h3 id='title' className='flex justify-center font-bold text-black dark:text-white mt-10 translate-x-0 md:translate-x-0 translate-y-14'>الرئيسية - خطة سفر جاهزة</h3>
  <div id='CountrysPlan' className='mt-20 gap-10 translate-x-4 md:translate-x-6  lg:translate-x-0'>



<Link to='/خطة-سفر-جاهزة-السعودية-الامارات-قطر' className='z-40 ' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div  className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#2d694ec6] w-[320px] m-3 p-2'>
 <div  className='flex flex-col items-center gap-4 '>
  <div id='Flags' className='flex items-center'>
  <img  src={SaudiArabiaFlag} width={100} />
  <img  src={emiratesFlag} width={100} />
  <img  src={QatarFlag} width={100} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg '>السعودية - الامارات - قطر</p>
<p className=' text-white text-4xl mt-3'>خطة سفر جاهزة</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={doha} width={120} alt="" />
  <img className='rounded-3xl' src={SaudiArabia2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>خطة سفر جاهزة : السعودية - قطر - الامارات</p>
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
<Link to='/خطة-سفر-جاهزة-روسيا-ايطاليا-فرنسا' className='z-40 ' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div  className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#254972c6] w-[320px] m-3 p-2'>
 <div  className='flex flex-col items-center gap-4 '>
  <div id='Flags' className='flex items-center'>
  <img  src={ItalyFlag} width={100} />
  <img  src={RussiaFlag} width={100} />
  <img  src={FranceFlag} width={100} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg '> روسيا - ايطاليا - فرنسا</p>
<p className=' text-white text-4xl mt-3'>خطة سفر جاهزة</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={France1} width={120} alt="" />
  <img className='rounded-3xl' src={Russia2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>خطة سفر جاهزة : روسيا - ايطاليا - فرنسا</p>
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

<Link to='/خطة-سفر-جاهزة-امريكا-كندا-ماليزيا' className='z-40 ' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div  className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#75381ec6] w-[320px] m-3 p-2'>
 <div  className='flex flex-col items-center gap-4 '>
  <div id='Flags' className='flex items-center'>
  <img  src={CanadaFlag} width={100} />
  <img  src={AmericaFlag} width={100} />
  <img  src={MalaysiaFlag} width={100} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg '> كندا - امريكا - ماليزيا</p>
<p className=' text-white text-4xl mt-3'>خطة سفر جاهزة</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={Malaysia1} width={120} alt="" />
  <img className='rounded-3xl' src={America2} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>خطة سفر جاهزة : كندا - امريكا - ماليزيا</p>
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

<Link to='/خطة-سفر-جاهزة-المغرب-الكويت-تركيا' className='z-40 ' id='Country'>
<motion.div initial={{y:60,opacity:0}} transition={{duration:1}}whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} id="Country" className='flex flex-col items-center gap-2  w-fit'>
<div  className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#7e7340c6] w-[320px] m-3 p-2'>
 <div  className='flex flex-col items-center gap-4 '>
  <div id='Flags' className='flex items-center'>
  <img  src={MoroccoFlag} width={100} />
  <img  src={KuwaitFlag} width={100} />
  <img  src={TurkeyFlag} width={100} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg '> المغرب - الكويت - تركيا</p>
<p className=' text-white text-4xl mt-3'>خطة سفر جاهزة</p>

</div>


 </div>
 <div className='flex justify-center space-x-3 mt-2'>
  <img className='rounded-3xl' src={Turkey2} width={120} alt="" />
  <img className='rounded-3xl' src={chefchaouen} width={120} alt="" />

 </div>

</div>
<p className='text-sm text-black dark:text-white '>خطة سفر جاهزة : المغرب - الكويت - تركيا</p>
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

export default CountrysPlan