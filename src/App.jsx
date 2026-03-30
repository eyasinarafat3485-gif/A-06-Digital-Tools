import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PremiumDigi from './components/PremiumDigi/PremiumDigi'
import Products from './components/Products/Products'
import StatsSection from './components/StatsSection/StatsSection'
import Steps from './components/Steps/Steps'
import Transform from './components/Transform/Transform'
import Transparent from './components/Transparent/Transparent'

const getProducts= async ()=>{
  const res= await fetch("/data.json")
  return res.json()
}
const productsPromise= getProducts()

function App() {
  

  return (
    <>
     
     <Navbar></Navbar>
     <Banner></Banner>
     <StatsSection></StatsSection>
     <PremiumDigi></PremiumDigi>

     <Products key={Products.id} productsPromise={productsPromise}></Products>
     <Steps></Steps>
     <Transparent></Transparent>
     <Transform></Transform>
     <Footer></Footer>
    </>
  )
}

export default App
