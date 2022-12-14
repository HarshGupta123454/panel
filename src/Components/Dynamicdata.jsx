import React from 'react'
import "./dynamicdata.css"
import Chart from './Chart';
import Drop from './Drop';
export default function Dynamicdata({data1,data2,name}) {
  return (
    <>
      <div className="containers">
        <div className="left">
          <h3 className='heading'>{name.name1}</h3>
          <div style={{minHeight:"30vh"}}>
          {data1?.map((ele)=>{
            return(
              <Drop heading={ele.val}/>
            )
          })}
        </div>
          <Chart/>
          

        </div>
        <div className="right">
          <h3 className='heading'>{name.name2}</h3>
          <div style={{minHeight:"31vh"}}>
          {data2?.map((ele)=>{
            return(
              <Drop heading={ele.val}/>
            )
          })}
        </div>
          {name.name2===""?"":<Chart/>}
          
        </div>
      </div>
      
    </>
  )
}
