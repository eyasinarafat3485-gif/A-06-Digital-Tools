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
  const [activeTab, setActiveTab]= useState("products");
  // console.log(activeTab)
  const [carts, setCarts]= useState([]);
  // console.log(carts)

  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <PremiumDigi></PremiumDigi>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mb-15">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Products" defaultChecked onClick={() => setActiveTab("products")}/>

        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Cart" onClick={() => setActiveTab("cart")} />
        
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
