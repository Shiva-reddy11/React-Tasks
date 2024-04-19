import React, { useContext } from 'react'
import HomeScr from './Home'
import { DataShare } from '../Navigations/Navigations'

export default function ContactUs() {
  const data = useContext(DataShare)
  return (
    <div>
        <HomeScr/>
      <h1>Contact Us page</h1>
      <div style={data.data}></div>
    </div>
  )
}
