import React from 'react'
import "./dashboardHead.css"
export default function DashboardHead() {
  return (
    <div className='container'>
        <div className="dashboard-heading">
            <div><h2>Dashboard</h2></div>
            <div>
                <div className='dashboard-inputs'>
                    <span>From  </span><input type="date" name="" />
                
                    <span className='spans'>To</span><input type="date" name="" />
                </div>
            </div>
            <div className='dashboard-last-div'>
                <button className='export'>export</button>
                <div className='profile'></div>
            </div>
        </div>
    </div>
  )
}
