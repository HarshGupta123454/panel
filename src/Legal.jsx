import React from 'react'
import Dynamicdata from './Components/Dynamicdata'
import Navigation from './Components/Navigation'
import DashboardHeadBack from './Dashboaard/DashboardHeadBack'
export default function Legal() {
  const data1=[{val:"Task: 22"}]
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
