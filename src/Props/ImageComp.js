

import React from 'react'

const ImageComp = (props) => {
    console.log(props)
    
  return (
    
    <React.Fragment>
    
    <tr>
        <td>{props.storedata.id}</td>
        <td>{props.storedata.title}</td>
        <td>{props.storedata.category}</td>
      <td><img src={props.storedata.image} alt='shiva' width={'100px'}/> </td>
      </tr>
    </React.Fragment>
  )
}

export default ImageComp
