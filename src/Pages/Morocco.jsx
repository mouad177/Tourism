import React from 'react'
import Header from '../components/Header'
import MoroccoFlag from '/SallaProject/src/assets/img/MoroccoFlag.png'
import tangier from '/SallaProject/src/assets/img/tangier.jpg'
import chefchaouen from '/SallaProject/src/assets/img/chefchaouen.jpg'
import { motion } from "framer-motion"
import shoppingCart from '/SallaProject/src/assets/icons/shopping-cart.png'
import buy from '/SallaProject/src/assets/icons/buy.png'
import arrow from '/SallaProject/src/assets/icons/arrow.png'
import { Link } from 'react-router-dom'
import plus from '/SallaProject/src/assets/icons/plus (3).png'

function Morocco() {
  return (
<>
<Header/>

<div className='flex items-center flex-col md:flex-row-reverse ' >
<div className='flex flex-col items-center'>
<h3 className='mt-24 p-4 m-4 text-black dark:text-white'>الرئيسية - كل المعلومات السياحية - المغرب</h3>
<div  id="Country" className='flex flex-col items-center gap-2 md:mr-14 w-fit'>
<div id="Morocco" className='rounded-br-2xl bg-gradient-to-tr from-gray-800 to-[#bc4c4ec6] w-fit m-3 p-2'>
 <div  className='flex items-center gap-4'>
  <div id='MoroccoFlag'>
  <img  src={MoroccoFlag} width={150} />

  </div>

<div className='flex flex-col items-center gap-4'>
<p className=' text-[#ffffffc0] text-lg'>كل المعلومات السياحية عن</p>
<p className=' text-white text-4xl mt-3 mb-4 pb-3'>المــغرب</p>

</div>


 </div>
 <div className='flex justify-center space-x-3'>
  <img className='rounded-3xl' src={tangier} width={90} alt="" />
  <img className='rounded-3xl' src={chefchaouen} width={90} alt="" />

 </div>

</div>


</div>


</div>
<div className='flex flex-col  gap-4'>
    <p className='text-black dark:text-white text-2xl md:text-4xl text-center'>كل المعلومات السياحية - المغرب</p>
    <p className='text-[#33313190] dark:text-[#ffffffab] text-lg flex justify-end'>جميع معلومات السياحة في المغرب</p>
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
  <button id='add1'  className='flex flex-row-reverse items-center gap-3 p-2 rounded-2xl bg-green-400 hover:bg-green-600'>
<p className='text-white text-sm'>اشتري الان</p>
<img src={buy} width={20} alt="" />


  </button>
</div>

</div>

</div>


<Link to='/الصفحة-الرئيسية' className='md:mr-20 flex items-center justify-center mt-4 md:mt-0 z-50 md:translate-y-52'>

<button className='flex items-center gap-3 p-2 px-10 rounded-2xl bg-blue-400 hover:bg-blue-600'>
<p className='text-white'>رجوع</p>
<img src={arrow} width={20} alt="" />
</button>


</Link>


</div>
</>
  )
}

export default Morocco
