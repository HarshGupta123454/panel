import React from 'react'
import "./dynamicdata.css"
import { useModal } from 'react-hooks-use-modal';
export default function Dynamicdata() {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    focusTrapOptions: {
        clickOutsideDeactivates: true,
    },
});
  return (
    <>
      <div className="containers">
        <div className="left">
          <h2>Trainning</h2>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>


        </div>
        <div className="right">
          <h2>Cources</h2>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
          <div onClick={open}><p>Applicant 22</p><span>@</span></div>
        </div>
      </div>
      <Modal>
        <div className='modal'>
          <h2>Applicant</h2>

          <table>
            <tr>
              <th>Rid</th>
              <th>Name</th>
              <th>Skill</th>
              <th>Time</th>
              <th>Time</th>
              <th>Handler</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1234</td>
              <td>Shreyaan Daga</td>
              <td>Python</td>
              <td>12 dec</td>
              <td>silla</td>
              <td>Notified</td>
              <td>None</td>
            </tr>
          </table>

          {/* <button onClick={close}>CLOSE</button> */}
        </div>
      </Modal>
    </>
  )
}
