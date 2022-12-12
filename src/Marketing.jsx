import React from 'react'
import Dynamicdata from './Components/Dynamicdata'
import Navigation from './Components/Navigation'
import DashboardHeadBack from './Dashboaard/DashboardHeadBack'
export default function Marketing() {
  const data1=[{val:"Reach: 22"},{val:"Leads: 22"},{val:"Channel: 22"}]
  const data2=[{val:"Follower: 22"},{val:"Reach: 22"},{val:"Leads: 22"},{val:"Channels: 22"}]
  const name={name1:"B2B",name2:"B2C"}
  return (
    <>
    <DashboardHeadBack/>
    <Navigation/>
    <Dynamicdata data1={data1} data2={data2} name={name}/>
    </>
  )
}
