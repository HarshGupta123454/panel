import React from 'react'
import "./navigation.css"
import {NavLink} from "react-router-dom"
export default function Navigation() {
  return (
    <>
    <div className="container">
        <div className="navbox">

            <div><NavLink className="link" to="/product"><p>product</p></NavLink></div>
            <div><NavLink className="link" to="/marketing"><p>marketing</p></NavLink></div>
            <div><NavLink className="link" to="/sales"><p>sales</p></NavLink></div>
            <div><NavLink className="link" to="/it"><p>it</p></NavLink></div>
            <div><NavLink className="link" to="/legal"><p>legal</p></NavLink></div>
            <div><NavLink className="link" to="/finance"><p>finance</p></NavLink></div>
        </div>
    </div>

    </>
  )
}
