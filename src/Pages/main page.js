import React, { useContext } from 'react'
import HomeScr from './Home'
import { DataShare } from '../Navigations/Navigations'


function MainPage() {
  const Response = useContext(DataShare)
  const{data,Changeclr}=Response
  console.log(Response)
  return (
   <>
   <HomeScr/>
   {/* <div className="bg-change"></div> */}
   {/* <div style={data}></div> */}
{/* <button onClick={Changeclr} >Change color</button>  */}
   </>
  )
}

export default MainPage
