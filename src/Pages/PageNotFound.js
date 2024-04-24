import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { DataShare } from '../Navigations/Navigations'
function PageNotFound() {
   const Response = useContext(DataShare)
   

  return (
    <div>
      <h1>Page not Found</h1>
      {/* <div style={Response.data}></div> */}
      <button ><Link to={'/'}>Back to Home Page</Link></button>
      
    </div>
  )
}

export default PageNotFound
