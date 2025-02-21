import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './newarrivals.css'

const NewArrivals = () => {
    const [userData , setUserData] = useState([])

    
    useEffect(()=>{
          fetch('https://api.npoint.io/87b76b1f84cb8afabf11')
            .then(response => response.json())
            .then(json => setUserData(json))
      } , [])

  return (
    <>
        <div id='newarrivals' className="container">
        <h2 className='text-2xl font-normal font-poppins text-black leading-9 text-center my-6'>New <span className='text-brand font-bold'>Arrival</span></h2>
            <div className="row flex gap-6 flex-wrap justify-center overflow-hidden">
                {
                    userData.map((item)=>(
                        <div className="single_card w-[220px] h-[380px] cursor-pointer border-[1px] border-brand shadow-xl p-3 flex flex-col relative">
                            <img className='h-fit' src={item.image} alt="image" />
                            <h3 className='text-lg font-semibold font-poppins text-brand mb-2'>{item.price}</h3>
                            <p className='text-xs font-poppins font-medium'>{item.description}</p>
                            <Link className='cart w-[80%] py-2 bg-brand rounded-xl text-center text-white font-semibold font-poppins text-sm mt-5'>Add to Cart</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default NewArrivals