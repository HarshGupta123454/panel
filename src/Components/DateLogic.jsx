
import {useState} from "react"
function DateLogic() {
  const current = new Date();
  const d = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  console.log(d);
  const[datea,setdate]=useState({
    startdate:"01/01/2022",
    endDate:d,
  })
  const data=[{date:"2022/10/11"},{date:"2022/11/11"},{date:"2022/5/15"},{date:"2022/4/11"},{date:"2022/7/21"},{date:"2022/8/19"},{date:"2022/12/12"}]
  const change=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setdate((perv)=>{
      return{
        ...perv,
        [name]:value
      }
    })
  }

  return (
   <>
   <div>
    <input type="date" onChange={change} name="startdate" value={datea.startdate}/>
    <input type="date" onChange={change} name="endDate" value={datea.endDate}/>
   </div>
   <div>
    {data?.filter(val=>{
    const date = new Date(val.date)
    if ((new Date(datea.startdate) < date) && (new Date(datea.endDate) > date)) {
      console.log(val)
      return val
    }
    
    })?.map((val)=>{
      return(
      <div>
       <h1>{val.date}</h1>
       {console.log(`${val.date} is this`)} 
      </div>
      )
    })}
   </div>
   <div><h1>hello</h1></div>
   </>
  );
}

export default DateLogic;
