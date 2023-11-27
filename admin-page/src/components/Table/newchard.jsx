import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import "./newchart.css";

export default function Chartnew() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [chartData2, setChartData2] = useState({});
    const [chartOptions2, setChartOptions2] = useState({});

  useEffect(() => {
    const data = {
      labels: ["G1", "G2", "G3", "G4"],
      datasets: [
        {
          label: "Group people",
          data: [152, 110, 200, 60],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };



    setChartData(data);
    setChartOptions(options);


    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data2 = {
            labels: ["G1", "G2", "G3", "G4"],
            datasets: [
                // {
                //     label: 'First Dataset',
                //     data: [65, 59, 80, 81, 56, 55, 40],
                //     fill: false,
                //     borderColor: documentStyle.getPropertyValue('--blue-500'),
                //     tension: 0.4
                // },
                {
                    label: 'Rating',
                    data: [1, 2, 3, 4, 5],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options2 = {
            maintainAspectRatio: false,
            aspectRatio: 1.2,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData2(data2);
        setChartOptions2(options2);

  }, []);

  return (
    <div className="row mt-2 ">
      
        <div className="col-12 lg:col-6">
          <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="card">
          <Chart type="line" data={chartData2} options={chartOptions2} />
          </div>
        </div>
      
    </div>
  );
}
