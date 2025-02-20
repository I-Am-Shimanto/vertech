import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
        <section id='banner'>
            <div className="container">
                <div className="row">
                    <p className='max-w-[570px] text-base font-normal font-poppins text-white'>Explore our Premium MacBook Collection, featuring the latest models from Apple, designed for power, elegance, and efficiency.</p>
                    <h1 className='text-5xl font-normal font-poppins text-white leading-[60px] my-5'>Business Laptop <br /><span className='font-bold text-[#f28020]'> Collection</span></h1>
                    <Link className='py-1.5 px-3 bg-[#f28020] rounded-sm text-white font-poppins text-sm font-normal'>Shop Now</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner