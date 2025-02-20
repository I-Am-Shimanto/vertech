import React from 'react'

const Brand = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <h2 className='text-2xl font-normal font-poppins text-black leading-9 text-center mt-6 mb-5'>FEATURED <span className='text-brand font-bold'>Brands</span></h2>
                <div className="img flex flex-wrap justify-between mb-14">
                    <img src="images/acer.png" alt="acer" />
                    <img src="images/asus.png" alt="asus" />
                    <img src="images/dell.png" alt="dell" />
                    <img src="images/gigabyte.png" alt="gigabyte" />
                    <img src="images/hp.png" alt="hp" />
                    <img src="images/lenovo.png" alt="lenovo" />
                    <img src="images/msi.png" alt="msi" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Brand