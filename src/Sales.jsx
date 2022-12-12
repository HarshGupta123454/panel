import React from 'react'
import Dynamicdata from './Components/Dynamicdata'
import Navigation from './Components/Navigation'
import DashboardHeadBack from './Dashboaard/DashboardHeadBack'
export default function Sales() {
  const data1=[{val:"Conversion: 22"},{val:"C.R:"},{val:"Revenue: 22"},{val:"No of Schools: 22"},{val:"No of Students: 22"}]
  const data2=[{val:"Conversion: 22"},{val:"C.R:"},{val:"Revenue: 22"},{val:"No of Schools: 22"},{val:"New Students: 22"}]
  
  const name={name1:"B2B",name2:"B2C"}
  return (
   <>
   <DashboardHeadBack/>
   <Navigation/>
   <Dynamicdata data1={data1} data2={data2} name={name}/>
   </>
  )
}
