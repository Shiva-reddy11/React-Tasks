import React, { useEffect, useState } from 'react'

function UsememoComp() {
 
   const [agecount,setAgeCount]=useState(0)
   const [salary,setSalary]=useState(100)

   useEffect(()=>{
    ageCountEven()
    salarycount()
   },[])


   const AgeIncriment=()=>{
       console.log('ageIncriment')
    setAgeCount(agecount+1)
   }

   
   const salaryIncriment = () =>{
       console.log('SalaryIncriment')
       setSalary(salary+1)
    }
    
    const ageCountEven=()=>{
     console.log('agecountrendaring')
    }
    const salarycount=()=>{
        console.log('salarycountrendaring')
    }
  return (
    <>
    
    <h1>Age  {agecount}</h1>
    
    <h1>Salary  {salary}</h1>

    <button onClick={AgeIncriment}>AgeIncriment</button>
   
    <button onClick={salaryIncriment}>SalaryIncriment</button>
    
    </>
  )
}

export default UsememoComp
