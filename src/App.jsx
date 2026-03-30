import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PremiumDigi from './components/PremiumDigi/PremiumDigi'
import Products from './components/Products/Products'
import StatsSection from './components/StatsSection/StatsSection'
import Steps from './components/Steps/Steps'
import Transform from './components/Transform/Transform'
import Transparent from './components/Transparent/Transparent'

const getProducts = async () => {
  const res = await fetch("/data.json")
  return res.json()
}
const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState("products");
  // console.log(activeTab)
  const [carts, setCarts] = useState([]);
  // console.log(carts)

  return (
    <>

      <Navbar cartCount={carts.length}></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <PremiumDigi></PremiumDigi>
     
      <div className="tabs justify-center bg-transparent mb-15">

      <button
        onClick={() => setActiveTab("products")}
        className={`px-6 py-2 rounded-full transition-all duration-300 border cursor-pointer ${activeTab === "products" ? "bg-[#8B2CFF] text-white" : "bg-transparent text-[#5B2C91]"}`}>
        Products
      </button>
      <button
        onClick={() => setActiveTab("cart")}
        className={`px-6 py-2 rounded-full transition-all duration-300 border cursor-pointer ${activeTab === "cart" ? "bg-[#8B2CFF] text-white" : "bg-transparent text-[#5B2C91]"}`}>{`Cart (${carts.length})`}
      </button>
      </div>

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      {activeTab === "products" && <Products key={Products.id} productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>}
      <Steps></Steps>
      <Transparent></Transparent>
      <Transform></Transform>
      <Footer></Footer>
    </>
  )
}

export default App
