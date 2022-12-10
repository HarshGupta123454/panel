import React ,{useState} from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

export default function Chart() {
    const[data,setdata]=useState({
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[
            {
                label:"first data",
                data:[10,50,20,40,80,90,10],
                backgroundColor:"pink",
                borderColor:"blue",
                fill:true,
            }
        ]
    })
  return (
    <>
    <Line data={data}>hello</Line>
    </>
  )
}
