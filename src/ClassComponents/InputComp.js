import { Component } from "react";




class InputComp extends Component{
    render(){
        return(
            <>
    <br></br>
     <label htmlFor="myInput">User Name : </label>
      <input type="text" id="myInput" name="myInput" /> <br></br> <br></br>

      <label htmlFor="myInput">Password : </label>
      <input type="text" id="myInput" name="myInput" />
      <br></br><br></br>
    </>
        )
    }
}
export default InputComp