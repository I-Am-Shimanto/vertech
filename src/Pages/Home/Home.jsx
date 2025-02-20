import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Homebanner/Banner'
import Brand from '../../Components/brand/Brand'
import Categories from '../../Components/categories/Categories'
import NewArrivals from '../../Components/newArrivals/NewArrivals'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Brand/>
        <Categories/>
        <NewArrivals/>
    </>
  )
}

export default Home