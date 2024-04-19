import { Component } from "react";

class Foreach extends Component{
    alertmsg=()=>{
        alert("hiii ")
    }


    render(){
        return(
            <>
            <button onClick={this.alertmsg}>SHIVA</button>
            <button onClick={this.alertmsg}>SHIVA</button>
            <button onClick={this.alertmsg}>SHIVA</button>
            <button onClick={this.alertmsg}>SHIVA</button>
            <button onClick={this.alertmsg}>SHIVA</button>
           
            </>
        )
    }
}

export default Foreach;