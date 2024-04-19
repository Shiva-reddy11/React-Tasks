import axios from 'axios'
import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useEffect } from 'react'

function AxiosComp() {
  const [data,setData]=useState([])

useEffect(()=>{
    Axiurl()
},[])

const Axiurl=async()=>{
    const Url = await axios.get('https://dummyjson.com/products')
    // console.log(Apurl)
    setData(Url)    
}
console.log(data)

  return (
    <>
    
     {
      data.map((eachproduct)=>{
        const[brand]=eachproduct
        return(
          <h1>{brand}</h1>
        )
      })
     }

    </>
  )
}

export default AxiosComp
