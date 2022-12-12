import React from 'react'
import Dynamicdata from './Components/Dynamicdata'
import Navigation from './Components/Navigation'
import DashboardHeadBack from './Dashboaard/DashboardHeadBack'
export default function Products() {
  const data1=[{val:"Applicants: 22"},{val:"Shortlisted: 22"},{val:"Onboarded: 22"},{val:"Requirements: 22"},{val:"Active Cources: 22"}]
  const data2=[{val:"Total Cources: 22"},{val:"Active Cources: 22"},{val:"New Cources: 22"},{val:"Cources Verified: 22"},{val:"Batches Added: 22"}]
  const name={name1:"Trainning",name2:"Cources"}
  return (
    <>
    <DashboardHeadBack/>
    <Navigation/>
    <Dynamicdata data1={data1} data2={data2} name={name}/>
    </>
  )
}
