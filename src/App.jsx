import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import TouristInformation from './Pages/TouristInformation'
import Qatar from './Pages/Qatar'
import Morocco from './Pages/Morocco'
import SaudiArabia from './Pages/SaudiArabia'
import Emirates from './Pages/Emirates'
import Turkey from './Pages/Turkey'
import Italy from './Pages/Italy'
import America from './Pages/America'
import Kuwait from './Pages/Kuwait'
import Malaysia from './Pages/Malaysia'
import Japan from './Pages/Japan'
import France from './Pages/France'
import Netherlands from './Pages/Netherlands'
import Map from './Pages/Map'
import Canada from './Pages/Canada'
import Russia from './Pages/Russia'
import Bahrain from './Pages/Bahrain'
import Offers from './Pages/Offers'
import SaudiArabiaEmiratesQatar from './Pages/SaudiArabiaEmiratesQatar'
import RussiaFranceItaly from './Pages/RussiaFranceItaly'
import AmericaCanadaMalaysia from './Pages/AmericaCanadaMalaysia'
import MoroccoKuwaitTurkey from './Pages/MoroccoKuwaitTurkey'
import CountrysPlan from './Pages/CountrysPlan'
import AllProducts from './Pages/AllProducts'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
<BrowserRouter basename='/Tourism/'>
<Routes>

<Route index element={<Home/>} />
<Route path='/الصفحة-الرئيسية' element={<Home/>} />
<Route path='/معلومات-سياحية' element={<TouristInformation/>} />
<Route path='/خرائط-سياحية' element={<Map/>} />
<Route path='/عروض' element={<Offers/>} />
<Route path='/خطة-سفر' element={<CountrysPlan/>} />
<Route path='/كل-المنتجات' element={<AllProducts/>} />
<Route path='/اتصل-بنا'element={<Contact/>} />

<Route path='/Qatar' element={<Qatar/>} />
<Route path='/Morocco' element={<Morocco/>} />
<Route path='/SaudiArabia' element={<SaudiArabia/>} />
<Route path='/Emirates' element={<Emirates/>} />
<Route path='/Turkey' element={<Turkey/>} />
<Route path='/Italy' element={<Italy/>} />
<Route path='/America' element={<America/>} />
<Route path='/Kuwait' element={<Kuwait/>} />
<Route path='/Malaysia' element={<Malaysia/>} />
<Route path='/Japan' element={<Japan/>} />
<Route path='/France' element={<France/>} />
<Route path='/Netherlands' element={<Netherlands/>} />
<Route path='/Canada' element={<Canada/>} />
<Route path='/Russia' element={<Russia/>} />
<Route path='/Bahrain' element={<Bahrain/>} />
<Route path='/خطة-سفر-جاهزة-السعودية-الامارات-قطر' element={<SaudiArabiaEmiratesQatar/>} />
<Route path='/خطة-سفر-جاهزة-روسيا-ايطاليا-فرنسا' element={<RussiaFranceItaly/>} />
<Route path='/خطة-سفر-جاهزة-امريكا-كندا-ماليزيا' element={<AmericaCanadaMalaysia/>} />
<Route path='/خطة-سفر-جاهزة-المغرب-الكويت-تركيا' element={<MoroccoKuwaitTurkey/>} />



</Routes>



</BrowserRouter>
    </>
  )
}

export default App
