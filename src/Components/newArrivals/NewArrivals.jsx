import React, { useEffect, useState } from 'react'

const NewArrivals = () => {
    const [userData , setUserData] = useState([])

    
    useEffect(()=>{
          fetch('https://api.npoint.io/87b76b1f84cb8afabf11')
            .then(response => response.json())
            .then(json => setUserData(json))
      } , [])
console.log(userData);

  return (
    <>
        <div className="container">
            <div className="row flex gap-6 flex-wrap">
                {
                    userData.map((item)=>(
                        <div className="single_card w-[250px] border">
                            <img src={item.image} alt="" />
                            <p>{item.description}</p>
                            <h3>{item.price}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default NewArrivals