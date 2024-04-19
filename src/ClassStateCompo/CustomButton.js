import React, { Component } from 'react'

export class CustomButton extends Component {
     
       state={
        isSubscribe:false ,
        text1:"Subscribed",
        text2:"Subscribe"
       }
      
     Changestate=()=>{
      this.setState({
        isSubscribe:!this.state.isSubscribe
      })
    }

  render() {
    return (
      <>
      <button style={
        {color: this.state.isSubscribe? 'red':'black'}
      } onClick={this.Changestate}  >{this.state.isSubscribe ? this.state.text1 : this.state.text2}</button>

      {
        this.state.isSubscribe ? <h3>Welcome user</h3> 
         : <h2>Please Subscribe</h2>
      }
      </>
    )
  }
}

export default CustomButton

