import { Component } from "react";




class Counter extends Component{

state={
     count:0
    
}

incriment=()=>{
    this.setState(
        {
        count:this.state.count+1
        }
    )
    }

    decriment=()=>{
        this.setState(
            {
            count:this.state.count-1
        }
    )
}
        reset=()=>{
            this.setState({
                count:0
            })
       }

    render(){
        return(
         <>

        <h3>Count  {this.state.count}</h3>   
          <button onClick={this.incriment}>Incriment</button>
         <button onClick={this.decriment}>Decriment</button>
         <button onClick={this.reset}>Reset</button> 


        </>
        )
    }
}

export default Counter