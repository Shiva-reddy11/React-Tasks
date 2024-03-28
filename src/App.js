import React,{useEffect,useState} from 'react'
import './App.css'




function App (){
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
  <table>
    <th>id</th>
    <th>title</th>
    <th>category</th>
    <th>description</th>
    <th>image</th>
    <th>price</th>
    {data.map((item)=>
    
    <tr>
    <td>{item.id}         </td>
    <td>{item.title}      </td>
    <td>{item.category}   </td>
    <td>{item.description}</td>
      <td> <img src={item.image} alt="shiva" width="130px"/></td> 
    <td>{item.price}       </td>
    </tr>
    )}
    </table>
  </>
  )
}

export default App;



