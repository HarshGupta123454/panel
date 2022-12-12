import React from 'react'
import Dynamicdata from './Components/Dynamicdata'
import Navigation from './Components/Navigation'
import DashboardHeadBack from './Dashboaard/DashboardHeadBack'

export default function It() {
  const data1=[{val:"Proj. 22"},{val:"Task: 22"},{val:"Bugs: 22"}]
  const data2=[]
  const name={name1:"",name2:""}
  return (
    <>
    <DashboardHeadBack/>
    <Navigation/>
    <Dynamicdata data1={data1} data2={data2} name={name}/>
    </>
  )
}
