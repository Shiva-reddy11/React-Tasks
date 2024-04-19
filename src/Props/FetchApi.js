import React,{useEffect,useState} from 'react';
import ImageComp from './ImageComp';

const FakeStoreApi = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then((res)=>{
              return res.json()
            })
            .then((val)=>{
              setData(val)
            })
            console.log(data)
  },[])
  return (
   <>
   {
     data.map((val)=>
     <ImageComp storedata={val}/>
     )

   }
   </>
  )
}

export default FakeStoreApi
