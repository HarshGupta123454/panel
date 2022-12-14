import React from 'react'
import "./DashboardData.css"
import {useNavigate} from "react-router-dom"
export default function DashboardData() {
    const navigate=useNavigate()
    const product=()=>{
        navigate("/product");
    }
    const marketing=()=>{
        navigate("/marketing");
    }
    const sales=()=>{
        navigate("/sales");
    }
    const delivery=()=>{
        navigate("/delivery");
    }
    const it=()=>{
        navigate("/it")
    }
    const hr=()=>{
        navigate("/hr")
    }
    const finance=()=>{
        navigate("/finance")
    }
    const legal=()=>{
        navigate("/legal")
    }
    return (
        <>
            <div className='container'>
                <div className="grid-container">
                    <div className="item2 i">
                        <h3>product</h3>
                        <div className="marketing-detail" onClick={product}>
                            <div className='marketing-detail-left' >
                                <h4>training</h4>
                                <p>Applicants: <span>22</span></p>
                                <p>Shortlisted: <span>22</span><span>{}</span></p>
                                <p>Onboarded: <span>22</span></p>
                                <p>Requirements: <span>22/22</span></p>
                                <p>Onboard Quality: <span>22</span></p>
                            </div>
                            <div>
                                <h4>cources</h4>
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
                        <div className="marketing-detail" onClick={marketing}>
                            <div className='marketing-detail-left'>
                                <h4>B2B</h4>
                                <p>Reach: <span>22</span></p>
                                <p>Leads: <span>22</span></p>
                                <p>Channels: <span>22</span></p>
                            </div>
                            <div>
                                <h4>B2C</h4>
                                <p>Followers: <span>22</span></p>
                                <p>Reach: <span>22</span></p>
                                <p>Leads: <span>22</span></p>
                                <p>Channels:<span>22</span></p>

                            </div>
                        </div>


                    </div>
                    <div className="item4 i">
                        <h3>delivery</h3>
                        <div className="marketing-detail" onClick={delivery}>
                            <div className='delivery'>
                                <p>Attendance: <span>22</span></p>
                                <p>Renewal Rate: <span>22</span></p>
                                <p>D.A.U: <span>22</span></p>
                                <p>NPS: <span>22</span></p>
                                <p>Class Quality: <span>22</span></p>
                            </div>
                            <div className='delivery'>
                                <p>Avg PAy: <span>22</span></p>
                                <p>Avg Level: <span>22</span></p>
                                <p>Referrals: <span>22</span></p>
                                <p>Refunds: <span>22</span></p>
                                <p>Supp: <span>22</span></p>
                            </div>
                            <div className='delivery'>
                                <p>School sat: <span>22</span></p>
                                <p>School Reneval: <span>22</span></p>
                                <p>Project Q: <span>22</span></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>

                    </div>
                    <div className="item5 i"><h3>sales</h3>
                    <div className="marketing-detail" onClick={sales}>
                            <div className='marketing-detail-left sale'>
                                <h4>B2B</h4>
                                <p>Conversions: <span>22</span></p>
                                <p>C.R: <span>22</span></p>
                                <p>Revenue: <span>22</span></p>
                                <p>No of Schools: <span>22</span></p>
                                <p>No of Students: <span>22</span></p>
                            </div>
                            <div className='sale'>
                                <h4>B2C</h4>
                                <p>Conversions: <span>22</span></p>
                                <p>C.R: <span>22</span></p>
                                <p>Revenue: <span>22</span></p>
                                <p>No of Students: <span>22</span></p>
                                <p>New Students: <span>22</span></p>

                            </div>
                        </div>
                    </div>
                    <div className="item1">
                        <div>
                            <h3>it</h3>
                            <div className="marketing-detail-2" onClick={it}>
                                <p>Prog: <span>22</span></p>
                                <p>Task: <span>22</span></p>
                                <p>Bugs: <span>22</span></p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h3>hr</h3>
                            <div className="marketing-detail-2" onClick={hr}>
                                <p>ENPS: <span>22</span></p>
                                <p>EFF: <span>22</span></p>
                                <p>PREF: <span>22</span></p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h3>Finance</h3>
                            <div className="marketing-detail-2" onClick={finance}>
                                <p>Rev: <span>22</span></p>
                                <p>Exp: <span>22</span></p>
                                <p>P/L: <span>22</span></p>
                                <p>F.R. <span>22</span></p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <h3>legal</h3>
                            <div className="marketing-detail-2" onClick={legal}>
                                <p>Tasks: <span>22</span></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
