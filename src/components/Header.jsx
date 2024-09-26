import React, { useEffect, useState } from 'react'
import logo from '/SallaProject/src/assets/icons/online-store.png'
import menu from '/SallaProject/src/assets/icons/menu.png'
import search from '/SallaProject/src/assets/icons/search.png'
import money from '/SallaProject/src/assets/icons/money.png'
import writing from '/SallaProject/src/assets/icons/writing.png'
import shoppingCart from '/SallaProject/src/assets/icons/shopping-cart.png'
import setting from '/SallaProject/src/assets/icons/setting.png'
import search2 from '/SallaProject/src/assets/icons/search (1).png'
import setting2 from '/SallaProject/src/assets/icons/setting (1).png'
import setting3 from '/SallaProject/src/assets/icons/setting3.png'
import art from '/SallaProject/src/assets/icons/paint-palette.png'
import close from '/SallaProject/src/assets/icons/close.png'
import darkmodeimg from '/SallaProject/src/assets/img/darkmodeimg.png'
import lightmodeimg from '/SallaProject/src/assets/img/lightmodeimg.png'

import { motion } from "framer-motion"

import { Link } from 'react-router-dom'
import { body } from 'framer-motion/client'

function Header() {


useEffect(()=>{
let setting = document.getElementById('setting');
let settings = document.getElementById('settings');
let close = document.getElementById('close');
let menu = document.getElementById('menu');
let Hero = document.getElementById('Hero');
let search = document.getElementById('search');
let close2 = document.getElementById('close2');
let close3 = document.getElementById('close3');
let singup = document.getElementById('singup');
let html = document.querySelector('html');
let lightmode = document.getElementById('lightmode');
let darkmode = document.getElementById('darkmode');
let cartIcon = document.getElementById('cartIcon');


lightmode.onclick = function(){
html.classList.remove('dark');
lightmode.classList.add('borderstyle');
darkmode.classList.remove('borderstyle');
}

darkmode.onclick = function(){
  html.classList.add('dark');
  darkmode.classList.add('borderstyle');
  lightmode.classList.remove('borderstyle');
  }
  
setting.onclick = function(){
  settings.style.filter='blur(0px)'

  settings.classList.toggle('-translate-x-full')
    Hero.style.filter='blur(2px)'
    Hero.style.transition='0.7s'

}
close.onclick = function(){
  settings.classList.toggle('-translate-x-full')
  Hero.style.filter='blur(0px)'
  Hero.style.transition='0.7s'
}
search.onclick = function(){
  search.style.filter='blur(0px)'

    Hero.style.filter='blur(2px)'
    Hero.style.transition='0.7s'

}
close2.onclick = function(){
  Hero.style.filter='blur(0px)'
  Hero.style.transition='0.7s'
}
singup.onclick = function(){
  singup.style.filter='blur(0px)'

    Hero.style.filter='blur(2px)'
    Hero.style.transition='0.7s'

}
close3.onclick = function(){
  Hero.style.filter='blur(0px)'
  Hero.style.transition='0.7s'
}




},[])


const [active,setActive] = useState(false);
const [visible,setVisible] = useState(false);
const [open,setOpen] = useState(false);
const [open2,setOpen2] = useState(false);


  return (
<>
<div className="w-full fixed h-[80px] z-50">
<div className='bg-cyan-600 whitespace-nowrap p-2 '>
  <div className="text flex items-center gap-8 text-sm">
    <p className='text-white'>عرض خاص %20 على جميع المنتجات</p>
    <p className='text-white'>عرض خاص %20 على جميع المنتجات</p>
    <p className='text-white'>عرض خاص %20 على جميع المنتجات</p>
    <p className='text-white'>عرض خاص %20 على جميع المنتجات</p>

  </div>

</div>
<nav dir='rtl' className='bg-gray-200 shadow-lg  top-[5%] dark:bg-[#262424] w-full z-50 p-2 rounded-2xl '>
<motion.div initial={{x:50,opacity:0}} transition={{duration:1}} animate={{opacity:1,x:0}} className='flex justify-center items-center gap-11'>


<Link to='/الصفحة-الرئيسية'>
<div id="logo" className='flex items-center'>
    <h2 className='dark:text-white text-black text-2xl pr-2' >رحلــة</h2>
  </div>
</Link>

  <ul className='items-center  gap-8 text-xs hidden lg:flex'>
  <Link to='/الصفحة-الرئيسية'className='font-semibold  text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>الصفحة الرئيسية</Link>
<Link to='/معلومات-سياحية'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>معلومات سياحية</Link>
<Link to='/خرائط-سياحية 'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>خرائط سياحية</Link>
<Link to='/عروض' className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>عروض حصرية</Link>
<Link to='/خطة-سفر 'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>خطة سفر</Link>
<Link to='/كل-المنتجات'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>كل المنتجات</Link>
<Link to='/اتصل-بنا'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300'>اتصل بنا</Link>


  </ul>


<div id="icons" className='flex items-center gap-3 md:translate-x-12 lg:mr-14'>
<img id='search' onClick={()=> setOpen(!open)} className='mx-3 icon' src={search2} width={30} />
  <img id='singup' onClick={()=> setVisible(!visible)} className='icon' src={writing} width={30} />


<img id='cartIcon' src={shoppingCart} width={30} className='icon' />




  <img id='setting'  className='icon' src={setting} width={30} />
  <img onClick={()=> setActive(!active)}  id='menu' src={menu} width={30}className='lg:hidden icon' />
</div>

</motion.div>


<motion.ul id='mobile-menu' initial={{height:0}} animate={{height:active?'auto':0}} transition={{duration:1}} className='grid grid-cols-2 overflow-scroll  m-auto w-[80%]  items-center gap-8 text-lg lg:hidden'>
  <motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}}>
  <Link to='/الصفحة-الرئيسية'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500'>الصفحة الرئيسية</Link>

  </motion.div>


<motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}}>

<Link to='/معلومات-سياحية'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500'>معلومات سياحية</Link>

</motion.div>

<motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}}>

<Link to='/خرائط-سياحية 'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500'>خرائط سياحية</Link>

</motion.div>

<motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}}>
  <Link to='/عروض' className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500'>عروض حصرية</Link>

  </motion.div>



  
<motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}}>

<Link to='/خطة-سفر 'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500'>خطة سفر</Link>

</motion.div>




<motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}}>

<Link to='/كل-المنتجات'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500'>كل المنتجات</Link>

</motion.div>


<motion.div initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2}} viewport={{once:false,amount:0.5}} className='p-7'>

<Link to='/اتصل-بنا'className='font-semibold text-black dark:text-white hover:text-cyan-300 duration-500 dark:hover:text-cyan-300  '>اتصل بنا</Link>

</motion.div>


  </motion.ul>

</nav>



<motion.div id='searchInputBox' initial={{opacity:0,scale:0}} animate={{opacity:open?1:0,scale:open?1:0}} transition={{duration:0.5}} className='flex  justify-center z-30  w-[80%] md:w-[60%] m-auto relative shadow-md bg-slate-400 dark:bg-gray-900 '>
<input 
 id='searchInput'   className='text-black dark:text-white rounded-xl bg-slate-300 dark:bg-gray-800 text-center p-2  w-[70%] outline-none' type="search" name="search" placeholder='ادخل كلمة البحث' />
<img id='close2' onClick={()=> setOpen(!open)} src={close} width={30} className='absolute right-[2%] top-[6%]' alt="" />
</motion.div>



<div  id='settings'  className='z-50 bg-gradient-to-tr from-[#cebebebf] to-[#626390]  relative shadow-2xl  lg:absolute lg:top-[100%] -translate-x-full duration-700 ease-in-out w-[400px] dark:from-[#3c3838] dark:to-[#504577]  p-2 rounded-xl '>
<img id='close' src={close} className='absolute' width={40} alt="" />

<div dir='rtl' className='flex flex-row items-center gap-3'>
<h3 className='text-white'>اعدادات عامة</h3>
<img src={setting3} width={24} />

</div>

<div dir='rtl' className='mt-10 flex items-center gap-3'>
  <img src={art} width={20} />
  <p className='text-white '>مظهر المتجر</p>

</div>
<p dir='rtl' className='text-[#ffffffab]  text-sm'>اختر الوضع النهاري او الليلي</p>

<div dir='rtl' className='flex flex-row items-center gap-8 mt-5 p-2'>
<div id='lightmode' className='flex flex-col items-center gap-2 p-2 rounded-2xl'>
<img src={lightmodeimg} width={100}  />
<p className='text-[#ffffffab]  text-sm'>الوضع النهاري</p>
</div>
<div id='darkmode' className='flex flex-col items-center gap-2  p-2 rounded-2xl'>
<img src={darkmodeimg} width={100}  />
<p className='text-[#ffffffab]  text-sm'>الوضع الليلي</p>
</div>

</div>
</div>

<motion.div initial={{opacity:0,scale:0}} animate={{opacity:visible?1:0,scale:visible?1:0}} transition={{duration:0.5}} id='SignUpBox' className='flex flex-col  mx-auto mt-8 justify-center items-center w-[350px] h-auto relative bottom-[-5%] right-[5%] md:relative bg-gray-300 shadow-xl dark:bg-gray-900 p-2 rounded-2xl z-20'>
  <img id='close3' onClick={()=> setVisible(!visible)} src={close} width={40} className='absolute top-[2%] right-[2%]' alt="" />
  <img src={writing} width={60} />
<p className="text-[#211e1ecc] dark:text-[#ffffffcd] mt-6">البريد الالكتروني
</p>

<form className='flex flex-col items-center gap-3'>
  <input className='outline-none p-2 mt-4 rounded-xl bg-slate-100 dark:bg-gray-800 text-black dark:text-white text-center' type="email" placeholder='your@email.com'/>
  <input type="submit" value="دخول" className='bg-blue-500 p-1 rounded-2xl self-center w-[50%] hover:bg-blue-600 duration-300 text-center text-white'/>
</form>
</motion.div>

</div>
</>
)
}

export default Header
