import React from 'react'
import "./DashboardData.css"
import {useNavigate} from "react-router-dom"
export default function DashboardData() {
    const navigate=useNavigate()
    const click=()=>{
        navigate("/product");
    }
    const click1=()=>{
        navigate("/marketing");
    }
    const click2=()=>{
        navigate("/sales");
    }
    const click3=()=>{
        navigate("/delivery");
    }
    return (
        <>
            <div className='container'>
                <div className="grid-container">
                    <div className="item2 i">
                        <h3>product</h3>
                        <div className="marketing-detail" onClick={click}>
                            <div className='marketing-detail-left' >
                                <h4>training</h4>
                                <p>Applicants: <span>22</span></p>
                                <p>Shortlisted: <span>22</span></p>
                                <p>Onboarded: <span>22</span></p>
                                <p>Requirements: <span>22</span></p>
                                <p>Onboard Quality: <span>22</span></p>
                            </div>
                            <div>
                                <h4>training</h4>
                                <p>Active Cources:<span>22</span></p>
                                <p>Total Cousces: <span>22</span></p>
                                <p>New Cources: <span>22</span></p>
                                <p>Cources Verified: <span>22</span></p>
                                <p>Batches Added: <span>22</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="item3 i">
                        <h3>marketing</h3>
                        <div className="marketing-detail" onClick={click1}>
                            <div className='marketing-detail-left'>
                                <h4>B2B</h4>
                                <p>Reach <span>22</span></p>
                                <p>Leads <span>22</span></p>
                                <p>Channels</p>
                            </div>
                            <div>
                                <h4>B2C</h4>
                                <p>Followers <span>22</span></p>
                                <p>Reach <span>22</span></p>
                                <p>Leads <span>22</span></p>
                                <p>Channels</p>

                            </div>
                        </div>


                    </div>
                    <div className="item4 i">
                        <h3>delivery</h3>
                        <div className="marketing-detail" onClick={click3}>
                            <div className='delivery'>
                                <p>Attendance</p>
                                <p>Renewal Rate</p>
                                <p>D.A.U</p>
                                <p>NPS</p>
                                <p>Class Quality</p>
                            </div>
                            <div className='delivery'>
                                <p>Avg PAy</p>
                                <p>Avg Level</p>
                                <p>Referrals</p>
                                <p>Refunds</p>
                                <p>Supp</p>
                            </div>
                            <div className='delivery'>
                                <p>School sat</p>
                                <p>School Reneval</p>
                                <p>Project Q</p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                    </div>
                    <div className="item5 i"><h3>sales</h3>
                    <div className="marketing-detail" onClick={click2}>
                            <div className='marketing-detail-left sale'>
                                <h4>B2B</h4>
                                <p>Conversions</p>
                                <p>C.R</p>
                                <p>Revenue</p>
                                <p>No of Students</p>
                                <p>No of Schools</p>
                            </div>
                            <div className='sale'>
                                <h4>B2C</h4>
                                <p>Conversions</p>
                                <p>C.R</p>
                                <p>Revenue</p>
                                <p>No of Students</p>
                                <p>No of Schools</p>

                            </div>
                        </div>
                    </div>
                    <div className="item1">
                        <div>
                            <h3>it</h3>
                            <div className="marketing-detail-2" >
                                <p>Prog <span>22</span></p>
                                <p>Task<span>22</span></p>
                                <p>Bugs<span>22</span></p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h3>hr</h3>
                            <div className="marketing-detail-2">
                                <p>Prog <span>22</span></p>
                                <p>Task<span>22</span></p>
                                <p>Bugs<span>22</span></p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h3>Finance</h3>
                            <div className="marketing-detail-2">
                                <p>Prog <span>22</span></p>
                                <p>Task<span>22</span></p>
                                <p>Bugs<span>22</span></p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h3>Finance</h3>
                            <div className="marketing-detail-2">
                                <p>Task <span>22</span></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
