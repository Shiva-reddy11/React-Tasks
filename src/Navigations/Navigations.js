import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScr from "../Pages/Home"
import PageNotFound from "../Pages/PageNotFound"
import contactUs from "../Pages/contactUs"
import AboutUs from "../Pages/About Us"
import Products from "../Pages/Products"
import MainPage from "../Pages/main page"
import { createContext, useState  } from "react"


export const DataShare = createContext()
const NavigationStact = () => {
  const [data,setData]=useState({ 
  border: '2px solid' ,
  margin:' 30px',
  height: '100px',
  backgroundColor: 'beige'})

  const Changeclr=()=>{
    setData({...data,backgroundColor:'red'})

  }

    return(
      <DataShare.Provider value={{
        data,
        Changeclr
      }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage}/>
       {/* <Route path="/" Component={HomeScr}/> */}
        <Route path="*" Component={PageNotFound}/>
        <Route path="/contact" Component={contactUs}/>
        <Route path="/about" Component={AboutUs}/>
        <Route path="/products" Component={Products}/>
      </Routes>
      
      </BrowserRouter> 
      </DataShare.Provider>
    )
}
export default NavigationStact