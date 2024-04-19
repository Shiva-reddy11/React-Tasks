import React, { useContext } from 'react'
import HomeScr from './Home'
import { DataShare } from '../Navigations/Navigations'

function AboutUs() {
  const Response = useContext(DataShare)
  console.log(Response.data)

  return (
    <div>
        <HomeScr/>
      <h1>AboutUs Page</h1>
      <div style={Response.data}></div>
    </div>
  )
}

export default AboutUs
