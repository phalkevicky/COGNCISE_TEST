import React, { useState } from 'react'
import './Overview.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CanvasJSReact from '../../../assets/fonts/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Overview = () => {

  const [isActive, setisActive] = useState(0)

  // Char data

  const options = {
    animationEnabled: true,
    title: {
      text: "Today's trends",
    },
    axisY: {
      title: "",
      suffix: ""
    },
    data: [{
      type: "splineArea",
     
      showInLegend: false,
      legendText: "",
      dataPoints: [
        { x: 0, y: 20.735 },
        { x: 1, y: 20.735 },
        { x: 2, y: 54.102 },
        { x: 3, y: 82.569 },
        { x: 4, y: 12.743 },
        { x: 5, y: 72.381 },
        { x: 6, y: 31.406 },
        { x: 7, y: 73.163 },
        { x: 8, y: 74.270 },
        { x: 9, y: 72.525 },
        { x: 10, y: 73.121 }
      ]
    },{
      type: "splineArea",
      xValueFormatString: "",
      yValueFormatString: "",
      showInLegend: false,
      legendText: "",
      dataPoints: [
        { x: 1, y: 20.735 },
        { x: 2, y: 14.102 },
        { x: 3, y: 62.569 },
        { x: 4, y: 32.743 },
        { x: 5, y: 62.381 },
        { x: 6, y: 51.406 },
        { x: 7, y: 83.163 },
        { x: 8, y: 44.270 },
        { x: 9, y: 22.525 },
        { x: 10, y: 13.121 }
      ]
    }
  ]
  }


  return (
    <>
      <div className='dashboard_cardwrap'>
        <div className='dash_card'>
          <div className='dash_cardname'>Unresolved</div>
          <div className='dash_count'>46</div>
        </div>
        <div className={isActive == 0 ? ' dash_card isdashActive' : 'dash_card'}>
          <div className={isActive == 0 ? ' dash_cardname isdashActivetext' : 'dash_cardname'}>Overdue</div>
          <div className='dash_count'>16</div>
        </div>
        <div className='dash_card'>
          <div className='dash_cardname'>Open</div>
          <div className='dash_count'>43</div>
        </div>
        <div className='dash_card'>
          <div className='dash_cardname'>On hold</div>
          <div className='dash_count'>64</div>
        </div>
      </div>

      <div className='dash_grapwrap'>
        <div className='dash_grap'>
        <CanvasJSChart options = {options} containerProps={{ width: '600px', height: '300px' }} />

        </div>
        <div className='dash_graprecord'>
          <div className='dash_grapdata'>
            <div className='dash_cardname'>Resolved</div>
            <div className='dash_count'>449</div>
          </div>
          <div className='dash_grapdata'>
            <div className='dash_cardname'>Received</div>
            <div className='dash_count'>426</div>
          </div>
          <div className='dash_grapdata'>
            <div className='dash_cardname'>Average first response time</div>
            <div className='dash_count'>33m</div>
          </div>
          <div className='dash_grapdata'>
            <div className='dash_cardname'>Average response time</div>
            <div className='dash_count'>64</div>
          </div>
          <div className='dash_grapdata'>
            <div className='dash_cardname'>Resolution within SLA</div>
            <div className='dash_count'>94%</div>
          </div>
        </div>
      </div>

      <div className='dash_taskwrap'>
        <div className='dash_sub'>
          <div className='dash_contain'>
            <div className='dask_head'><p>Unresolved tickets</p> <span>View details</span></div>
            <div className='dash_grp'>Group: <span>Support</span></div>
            <ul className='dash_list'>
              <li><p>Waiting on Feature Request</p><span>4238</span></li>
              <li><p>Awaiting Customer Response</p><span>1005</span></li>
              <li><p>Awaiting Developer Fix</p><span>914</span></li>
              <li><p>Pending</p><span>281</span></li>
            </ul>
          </div>
        </div>
        <div className='dash_sub'>
          <div className='dash_contain'>
            <div className='dask_head'><p>Tasks</p> <span>View all</span></div>
            <div className='dash_grp'>Today</div>
            <ul className='dash_list'>
              <li style={{cursor:'pointer'}}><p>Create new task</p><AddCircleIcon /></li>
              <li><div className='dash_check'><input type="checkbox" /><p>Finish ticket update</p> </div><span className='dash_urgent'>Urgent</span></li>
              <li><div className='dash_check'><input type="checkbox" /><p>Create new ticket example</p></div><span className='dash_new'>New</span></li>
              <li><div className='dash_check'><input type="checkbox" /><p>Update ticket report</p></div> <span className='dash_default'>Default</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview