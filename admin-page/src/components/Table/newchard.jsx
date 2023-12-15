import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "primereact/chart";
import "./newchart.css";

export default function Chartnew() {
  const [chartData, setChartData] = useState({});
  const [chartData2, setChartData2] = useState({});

  useEffect(() => {
    // ดึงข้อมูลจำนวนคนในแต่ละกลุ่ม
    axios.get('http://localhost:8081/group-counts').then(response => {
      const groupCounts = response.data; // ตัวอย่าง response: { '1': 2, '2': 1, '3': 2 }
      const data = {
        labels: Object.keys(groupCounts).map(key => `Group ${key}`),
        datasets: [
          {
            label: "Group people",
            data: Object.values(groupCounts),
            backgroundColor: [
              "rgba(255, 159, 64, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: [
              "rgb(255, 159, 64)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)"
            ],
            borderWidth: 1
          }
        ]
      };
      setChartData(data);
    }).catch(error => {
      console.error("There was an error fetching the group counts!", error);
    });

    // ดึงข้อมูลเพื่อสร้าง line chart สำหรับ ratings
    axios.get('http://localhost:8081/average-ratings').then(response => {
      // สมมติว่า response คือ array ของ average ratings สำหรับแต่ละกลุ่ม
      const labels = response.data.map(item => `Group ${item.groupId}`);
      const dataValues = response.data.map(item => item.averageRating);
      console.log(labels);
      console.log(dataValues);

      setChartData2({
        labels: labels,
        datasets: [
          {
            label: 'Average Rating',
            data: dataValues,
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.4
          }
        ]
      });
    }).catch(error => {
      console.error("There was an error fetching the average ratings!", error);
    });
  }, []);

  return (
    <div className="row mt-2 ">
      <div className="col-12 lg:col-6">
        <div className="card">
          <Chart type="bar" data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>
      <div className="col-12 lg:col-6">
        <div className="card">
          <Chart type="line" data={chartData2} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>
    </div>
  );
}
