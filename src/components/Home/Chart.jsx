import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

const MarkChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []); 

  useEffect(() => {
   
    if (data.length > 0) {
      const marks = data.map(e => Number(e.mark));
      const stname = data.map(e => e.name);

      const options = {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Marks',
        },
        xAxis: {
          categories: stname,
        },
        yAxis: {
          title: {
            text: 'Y-axis Label',
          },
        },
        series: [
          {
            name: 'Mark',
            data: marks,
          },
        ],
      };

      Highcharts.chart('chart-container', options);
    }
  }, [data]);

  return <div id="chart-container" />;
};

export default MarkChart;
