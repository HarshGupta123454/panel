import React from 'react'
import "./dynamicdata.css"
import Chart from './Chart';
import Drop from './Drop';
export default function Dynamicdata() {
  return (
    <>
      <div className="containers">
        <div className="left">
          <h2>Trainning</h2>
          <Drop/>
          <Drop/>
          <Drop/>
          <Drop/>
          <Drop/>

          <Chart/>


        </div>
        <div className="right">
          <h2>Cources</h2>
          <Drop/>
          <Drop/>
          <Drop/>
          <Drop/>
          <Drop/>
          <Chart/>
        </div>
      </div>
      
    </>
  )
}
