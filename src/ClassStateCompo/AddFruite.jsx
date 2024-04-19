import React, { Component } from 'react'

export default class AddFruite extends Component {
    state={
        fruits:["apple","banana"]
    }
    addnewfruit=()=>{
        const newfruit=[...this.state.fruits,"mango"]
        this.setState(
            {
                fruits:newfruit
            }
        )
    }

    removeFruit=(index)=>{
        const newfru=this.state.fruits.filter((eachfruit,indx)=>
            indx!==index
        )
       this.setState({
        fruits:newfru
       }) 
    }

    UpdateFruit=(index)=>{
        const updatefrt=this.state.fruits.map((eachElement,i)=>{
            if(i==index){
                return 'Updated Fruit'
            }else{
                return eachElement
            }
        })
        this.setState(
            {
                fruits:updatefrt
            }
        )
    }





    ///

    render(){
return(
  <>
  <button onClick={this.addnewfruit}>Add Fruit</button>
   <ol>
   {
    this.state.fruits.map((eachelement,index)=>{
        return(
            <>
            <li>
                {eachelement}
            </li>
            <button onClick={()=>this.removeFruit(index)}>remove fruit</button> <br></br>
            <button onClick={()=>this.UpdateFruit(index)}>Update</button>
            </>
        )
    })
   }
  </ol>
  </>
        )
    }
    }
    