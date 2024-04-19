import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import HomeScr from './Home'
import '../App.css'
import { DataShare } from '../Navigations/Navigations'

function Products() {
  const Response = useContext(DataShare)
  
const [objdata,setObjdata]=useState([])
 useEffect(()=>{
    Axiurl()
 },[])
 const Axiurl=async()=>{
    const Url = await axios.get('https://dummyjson.com/products')
    setObjdata(Url.data.products)

}
console.log(objdata.sort(objdata.price))
  return (
    <>
    <HomeScr/>
   <div style={Response.data}></div>
    <select>
  <option>Sort</option>
  <option >Low to High</option>
  <option >High to Low</option>
</select>



    
    <h1 className='titlename'>Products List</h1>
    <div className='Cardstyl'>
    {
      objdata.map(eachobj=>{
        const{id,brand,category,description,price,thumbnail,title,images}=eachobj

        return(
          
          <div className='Childdiv'>
          <p>{brand}</p>
          <p>{category}</p>
          <p>{description}</p>
          <p><img src={images[0]} height={'150px'}/></p>
          <p>₹ {price}</p>
          <p>{title}</p>
          <button>View Product</button>
          </div>
        )
      })
    }
     </div>
     
    </>
  )
}

export default Products
