import React from 'react'
import "./dynamicdata.css"
import Chart from './Chart';
import Drop from './Drop';
export default function Dynamicdata({data1,data2,name}) {
  console.log(data1);
  console.log(data2);
  // const {Applicants,Shortlisted,Onboarded,Requirements,Onboard_Quality,Active_Cources,New_Cources,Cources_Verified,Batches_Added,Total_cources,Reach}=data
  return (
    <>
      <div className="containers">
        <div className="left">
          <h2>{name.name1}</h2>
          {data1?.map((ele)=>{
            return(
              <Drop heading={ele.val}/>
            )
          })}
          <Chart/>

        </div>
        <div className="right">
          <h2>{name.name2}</h2>
          {data2?.map((ele)=>{
            return(
              <Drop heading={ele.val}/>
            )
          })}
          {name.name2===""?"":<Chart/>}
          
        </div>
      </div>
      
    </>
  )
}
