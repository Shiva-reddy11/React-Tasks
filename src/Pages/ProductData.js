import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../App.css'
import HomeScr from "./Home"

const ProductData = ()=>{
   const {productId} =  useParams()

const [data,setData]= useState(0)
const {brand,category,description,price,title,images,thumbnail}= data
   useEffect(()=>{
    fetchData()
   },[])
   const fetchData = async()=>{
   const axiosdata=await axios.get(`https://dummyjson.com/products/${productId}`)
   setData(axiosdata.data)
   }
   console.log ('productsview', data)
    return(
        <>
      <HomeScr/>
        <div className="product-data">
        <h1>Products Details</h1>
        <p>{brand}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p><img src={thumbnail}/></p>
        <p>₹ {price}</p>
        <button>Add to Cart</button>
        
        
        </div>
        </>
    )
}

export default ProductData