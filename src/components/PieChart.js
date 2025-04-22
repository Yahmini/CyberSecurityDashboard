import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['Phishing', 'Malware', 'Ransomware', 'DDoS', 'Insider Threats', 'Others'],
    datasets: [
      {
        data: [34, 26, 17, 11, 6, 6],
        backgroundColor: [
          '#FF6384',  // Phishing
          '#36A2EB',  // Malware
          '#FFCE56',  // Ransomware
          '#4BC0C0',  // DDoS
          '#9966FF',  // Insider Threats
          '#FF9F40',  // Others
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Global Cyber Threat Distribution (2022-23)',
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
