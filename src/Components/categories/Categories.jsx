import React from 'react'
import ComCategries from '../../common/common_categories/ComCategries'

const Categories = () => {
  return (
    <>
        <div className="container">
            <h2 className='text-2xl font-normal font-poppins text-black leading-9 text-center my-6'>Top <span className='text-brand font-bold'>Categories</span></h2>
            <div className="row flex flex-wrap gap-6 mb-14">
                <ComCategries bgcolor='bg-[#C5DAED]' img={<img src='images/business_laptop.png' alt='business_laptop'/>} name={"Business Class"} link={"Shop Now"}/>
                <ComCategries bgcolor='bg-[#E8E0EF]' img={<img src='images/macbook.png' alt='macbook'/>} name={"Business Class"} link={"Shop Now"}/>
                <ComCategries bgcolor='bg-[#C5DAED]' img={<img src='images/imac.png' alt='imac'/>} name={"Business Class"} link={"Shop Now"}/>
                <ComCategries bgcolor='bg-[#E8E0EF]' img={<img src='images/gaming_laptop.png' alt='gaming_laptop'/>} name={"Business Class"} link={"Shop Now"}/>
                <ComCategries bgcolor='bg-[#C5DAED]' img={<img src='images/ultrabook.png' alt='ultrabook'/>} name={"Business Class"} link={"Shop Now"}/>
                <ComCategries bgcolor='bg-[#E8E0EF]' img={<img src='images/ipad.png' alt='ipad'/>} name={"Business Class"} link={"Shop Now"}/>
            </div>
        </div>
    </>
  )
}

export default Categories