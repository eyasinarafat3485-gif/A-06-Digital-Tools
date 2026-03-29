import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import PremiumDigi from './components/PremiumDigi/PremiumDigi'
import Products from './components/Products/Products'
import StatsSection from './components/StatsSection/StatsSection'

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
    </>
  )
}

export default App
