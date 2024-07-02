//с кнопкой
/*import React, { useEffect, useRef, useState } from "react";
import chart from 'chart.js/auto';
import { useStore } from "effector-react";
import { getCostFx } from "../../../api/costsClient"; // Убедитесь, что правильно указали путь

const generateRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};

export default function CostChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const costs = useStore(getCostFx);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    // Используйте map для извлечения только нужных полей из данных о расходах
    const chartData = {
      labels: costs.map(cost => cost.name),
      datasets: [
        {
          data: costs.map(cost => cost.balance),
          backgroundColor: costs.map(() => generateRandomColor()),
        }
      ]
    };

    chartInstance.current = new chart(myChartRef, {
      type: "pie",
      data: chartData
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [costs, showChart]);

  const handleShowChartClick = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <button onClick={handleShowChartClick}>Показать график</button>
      {showChart && <canvas ref={chartRef} style={{ width: "300px", height: "300px" }} />}
    </div>
  );
}


*/

//раскомментить когда запросы заработают
/*import React, { useEffect, useRef } from "react";
import chart from 'chart.js/auto';
import { useStore } from "effector-react";
import { getCostFx } from "../../../api/costsClient"; // Убедитесь, что правильно указали путь

const generateRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};

export default function CostChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const costs = useStore(getCostFx);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    // Используйте map для извлечения только нужных полей из данных о расходах
    const chartData = {
      labels: costs.map(cost => cost.name),
      datasets: [
        {
          data: costs.map(cost => cost.balance),
          backgroundColor: costs.map(() => generateRandomColor()),
        }
      ]
    };

    chartInstance.current = new chart(myChartRef, {
      type: "pie",
      data: chartData
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [costs]);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "300px", height: "300px" }} />
    </div>
  );
}
*/


import React, { useEffect, useRef } from "react";
import chart from 'chart.js/auto';

const generateRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};

export default function CostChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    const initialData = {
      labels: ["label1", "label2", "label3"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        }
      ]
    };

    chartInstance.current = new chart(myChartRef, {
      type: "pie",
      data: initialData
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const addData = () => {
      const newData = {
        labels: ["label1", "label2", "label3", "label4", "label5"],
        datasets: [
          {
            data: [300, 50, 100, 150],
            backgroundColor: [
              ...chartInstance.current.data.datasets[0].backgroundColor,
              generateRandomColor()
            ],
          }
        ]
      };

      chartInstance.current.data = newData;
      chartInstance.current.update();
    };

    addData();
  }, []);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "300px", height: "300px" }} />
    </div>
  );
}







/*const Chart = () => {
    const pieChartData = {
        labels: ["October", "November", "December"],
        datasets: [{
          data: [8137119, 9431691, 10266674],
          label: "Infected People",
          backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
          hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
        }]
      };
      
      const pieChart = (
        <Pie
          width={130}
          height={50}
          options={{
            title: {
              display: true,
              text: "COVID-19 Cases of Last 3 Months",
              fontSize: 15
            },
            legend: {
              display: true, //Is the legend shown?
              position: "top" //Position of the legend.
            }
          }}
          data={{
            datasets: pieChartData.datasets,
            labels: pieChartData.labels
          }}
        />
      );
  return pieChart;
};
export default Chart;*/