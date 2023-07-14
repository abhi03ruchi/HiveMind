import React from 'react';
import Chart from "react-apexcharts";
import { useState } from 'react';

export default function Analytics() {
    const [state,setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [35, 50, 48, 52, 43, 65, 71, 94]
          }
        ]
      })
    return (
        <div className='teamM'>
                <main>
                <div>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="1200"
                    />
                </div>
                <div>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        width="1200"
                    />
                </div>
                
             
                </main>

        </div>
    )
}