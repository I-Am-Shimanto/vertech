import React from 'react'
import './comcategories.css'
import { Link } from 'react-router-dom'

const ComCategries = ({bgcolor = "bg-black", img, name, link}) => {
  return (
    <>
        <div className={`comm_cate_card w-[448px] ${bgcolor} flex gap-15 mx-auto cursor-pointer`}>
            <div className="img duration-[.4s]">
            {img}
            </div>
            <div className="text mt-15">
                <h3 className='text-sm font-semibold font-poppins text-black'>{name}</h3>
                <Link className='underline text-[12px] font-normal font-poppins '>{link}</Link>
            </div>
        </div>
    </>
  )
}

export default ComCategries