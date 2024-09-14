import React from 'react'
import Header from '../components/Header'
import CanadaFlag from '/SallaProject/src/assets/img/CanadaFlag.png'
import Canada1 from '/SallaProject/src/assets/img/Canada1.jpg'
import Canada2 from '/SallaProject/src/assets/img/Canada2.jpg'
import { motion } from "framer-motion"
import shoppingCart from '/SallaProject/src/assets/icons/shopping-cart.png'
import buy from '/SallaProject/src/assets/icons/buy.png'
import arrow from '/SallaProject/src/assets/icons/arrow.png'
import { Link } from 'react-router-dom'
import FranceFlag from '/SallaProject/src/assets/img/FranceFlag.png'
import France1 from '/SallaProject/src/assets/img/France1.jpg'
import France2 from '/SallaProject/src/assets/img/France2.jpg'
import RussiaFlag from '/SallaProject/src/assets/img/RussiaFlag.png'
import Russia1 from '/SallaProject/src/assets/img/Russia1.jpg'
import Russia2 from '/SallaProject/src/assets/img/Russia2.jpg'
import ItalyFlag from '/SallaProject/src/assets/img/ItalyFlag.png'
import Italy1 from '/SallaProject/src/assets/img/Italy1.jpg'
import Italy2 from '/SallaProject/src/assets/img/Italy2.jpg'
import plus from '/SallaProject/src/assets/icons/plus (3).png'

function RussiaFranceItaly() {
  return (
<>
<Header/>

<div className='flex items-center  flex-col md:flex-row-reverse ' >
<div className='flex flex-col items-center '>
<h3 className='mt-24 p-4 m-4 text-black dark:text-white'>الرئيسية - خطة سفر جاهزة : فرنسا - ايطاليا - روسيا</h3>
<div  id="Country" className='flex flex-col items-center gap-2 md:mr-14 w-fit'>
<div  className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#475698c6] w-[300px] lg:w-[fit] m-3 p-5'>
 <div  className='flex flex-col items-center gap-4'>
  <div id='Flags' className='flex items-center gap-2 px-3 justify-center'>
  <img  src={FranceFlag} width={100} />
<img src={RussiaFlag} width={100}  />
<img src={ItalyFlag} width={100} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg'>  فرنسا - ايطاليا - روسيا</p>
<p className=' text-white text-4xl mt-3 mb-3 text-center'>خطة سفر جاهزة</p>

</div>


 </div>
 <div className='flex justify-center space-x-3'>
  <img className='rounded-3xl md:w-[80px] lg:w-[120px]' src={France1} width={120} alt="" />
  <img className='rounded-3xl md:w-[80px] lg:w-[120px]' src={Russia2} width={120} alt="" />

 </div>

</div>


</div>


</div>
<div className='flex flex-col  gap-4'>
    <p className='text-black dark:text-white text-2xl md:text-4xl text-center'>خطة سفر جاهزة -  فرنسا - ايطاليا - روسيا</p>
   <div className='flex  items-center gap-4 justify-end'>
   <p className='text-black dark:text-white text-xl flex justify-end line-through'>SAR 130</p>
   <p className='text-red-400 text-xl flex justify-end '>SAR 99</p>

   </div>
<div className="flex justify-center items-center gap-6">
<div id='cart' className='z-40 md:translate-y-32'>
  <button   className='flex flex-row-reverse items-center gap-3 p-2 rounded-br-xl bg-blue-600 hover:bg-blue-800'>
<p className='text-white text-sm'>اضافة الى السلة</p>
<img className='bg-white rounded-full' src={plus} width={20} alt="" />


  </button>
</div>
<div id='buy' className='z-40 md:translate-y-32'>
  <button id='add1'  className='flex flex-row-reverse items-center gap-3 p-2 px-8 rounded-2xl bg-green-400 hover:bg-green-600'>
<p className='text-white text-sm'>اشتري الان</p>
<img src={buy} width={20} alt="" />


  </button>
</div>

</div>

</div>


<Link to='/الصفحة-الرئيسية' className='md:mr-20 flex items-center justify-center mt-4 md:mt-0 z-50 md:translate-y-96 lg:translate-y-56'>

<button className='flex items-center px-10 gap-3 p-2 md:translate-x-20 -z-50 rounded-2xl bg-blue-400 hover:bg-blue-600'>
<p className='text-white'>رجوع</p>
<img src={arrow} width={20} alt="" />
</button>


</Link>


</div>
</>
  )
}

export default RussiaFranceItaly