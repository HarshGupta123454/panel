import React from 'react'
import Navigation from './Components/Navigation'
import DashboardHeadBack from './Dashboaard/DashboardHeadBack'
import Dynamicdata from "./Components/Dynamicdata"
export default function Delivery() {
  const data1=[{val:"Attendance: 22"},{val:"NPS: 22"},{val:"Class Quality: 22"},{val:"D.A.U: 22"}]
  const data2=[{val:"Avg Pay: 22"},{val:"Avg Level: 22"},{val:"Referrals: 22"},{val:"Refunds: 22"}]
  const name={name1:"  ",name2:"  "}
  return (
    <>
    <DashboardHeadBack/>
    <Navigation/>
    <Dynamicdata data1={data1} data2={data2} name={name}/>
    </>
  )
}
