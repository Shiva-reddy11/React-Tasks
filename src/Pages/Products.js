import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import HomeScr from './Home'
import '../App.css'
import { DataShare } from '../Navigations/Navigations'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

function Products() {
  const Response = useContext(DataShare)
  
const [objdata,setObjdata]=useState([])
const [sortdata,setSortdata]=useState([])
const [Sort,setSort]=useState([])
const [Sdata,setSdata]=useState([])
 useEffect(()=>{
    Axiurl()
 },[])
 const Axiurl=async()=>{
    const Url = await axios.get('https://dummyjson.com/products')
    setObjdata(Url.data.products)

}

 const LowtoHigh = ()=>{
  const result=objdata.sort((a,b)=>a.price-b.price)
  setSortdata(result)
 }
//  .reverse()
 const HightoLow = ()=>{
  const result=objdata.sort((a,b)=>b.price-a.price)
  setSort(result)
 }

 const Reset = ()=>{
  setSortdata([])
 }


console.log('setdata' ,objdata)
  return (
    <>
    <HomeScr/>
   {/* <div style={Response.data}></div> */}
    <select>
  <option>Sort</option>
  <option>All</option>
  <option >Low to High</option>
  <option >High to Low</option>
</select>

<button onClick={LowtoHigh}>Low to High</button>
<button onClick={HightoLow}>High to Low</button>
<button onClick={Reset}>Reset</button>
    
    <h1 className='titlename'>Products List</h1>

{      
    objdata.length>0 
    ?
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
          <button >
            <Link to={`${brand}/${id}`} className='text-deca'>
            View Product
            </Link></button>
            <button>Add to cart</button>
          </div>
        )
      })
    }
     </div>
     :
     <>
     <h1>Loading......</h1>
     <Spinner/>
     </>
     }
    </>
  )
}

export default Products
