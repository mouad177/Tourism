import React from 'react'
import Header from '../components/Header'
import { motion } from "framer-motion"
import shoppingCart from '/SallaProject/src/assets/icons/shopping-cart.png'
import buy from '/SallaProject/src/assets/icons/buy.png'
import arrow from '/SallaProject/src/assets/icons/arrow.png'
import { Link } from 'react-router-dom'
import MalaysiaFlag from '/SallaProject/src/assets/img/MalaysiaFlag.png'
import Malaysia1 from '/SallaProject/src/assets/img/Malaysia1.jpg'
import Malaysia2 from '/SallaProject/src/assets/img/Malaysia2.jpg'
import AmericaFlag from '/SallaProject/src/assets/img/AmericaFlag.png'
import America1 from '/SallaProject/src/assets/img/America1.jpg'
import America2 from '/SallaProject/src/assets/img/America2.jpg'
import CanadaFlag from '/SallaProject/src/assets/img/CanadaFlag.png'
import Canada1 from '/SallaProject/src/assets/img/Canada1.jpg'
import Canada2 from '/SallaProject/src/assets/img/Canada2.jpg'
import plus from '/SallaProject/src/assets/icons/plus (3).png'

function AmericaCanadaMalaysia() {
  return (
<>
<Header/>

<div className='flex items-center  flex-col md:flex-row-reverse ' >
<div className='flex flex-col items-center '>
<h3 className='mt-24 p-4 m-4 text-black dark:text-white'>الرئيسية - خطة سفر جاهزة :  امريكا - كندا - ماليزيا</h3>
<div  id="Country" className='flex flex-col items-center gap-2 md:mr-14 w-fit'>
<div  className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#824747c6] w-[310px] lg:w-[fit] m-3 p-5'>
 <div  className='flex flex-col items-center gap-4'>
  <div id='Flags' className='flex items-center gap-2 px-3 justify-center'>
  <img  src={AmericaFlag} width={100} />
<img src={CanadaFlag} width={100}  />
<img src={MalaysiaFlag} width={100} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg'>  امريكا - كندا - ماليزيا</p>
<p className=' text-white text-4xl mt-3 mb-3 text-center'>خطة سفر جاهزة</p>

</div>


 </div>
 <div className='flex justify-center space-x-3'>
  <img className='rounded-3xl md:w-[80px] lg:w-[120px]' src={Malaysia1} width={120} alt="" />
  <img className='rounded-3xl md:w-[80px] lg:w-[120px]' src={America2} width={120} alt="" />

 </div>

</div>


</div>


</div>
<div className='flex flex-col  gap-4'>
    <p className='text-black dark:text-white text-2xl md:text-4xl text-center'>خطة سفر جاهزة -  امريكا - كندا - ماليزيا</p>
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

export default AmericaCanadaMalaysia