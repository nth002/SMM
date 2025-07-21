import React from "react";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import { Pie, Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaComments,
} from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const cardData = [
    { title: "Users", count: 1234, icon: <FaUsers /> },
    { title: "Orders", count: 567, icon: <FaShoppingCart /> },
    { title: "Revenue", count: "$12,345", icon: <FaDollarSign /> },
    { title: "Feedbacks", count: 89, icon: <FaComments /> },
  ];

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: "rgba(0, 255, 255, 1)",
        borderColor: "rgba(46, 144, 144, 1)",
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 7],
        backgroundColor: [
          "rgba(255, 99, 133, 1)",
          "rgba(54, 163, 235, 1)",
          "rgba(255, 207, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Bar Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  // Doughnut chart data
  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut Dataset",
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 133, 1)",
          "rgba(54, 163, 235, 1)",
          "rgba(255, 207, 86, 1)",
        ],
      },
    ],
  };

  // Radar chart data
  const radarData = {
    labels: ["Running", "Swimming", "Eating", "Cycling", "Sleeping"],
    datasets: [
      {
        label: "Radar Dataset",
        data: [20, 10, 4, 2, 8],
        backgroundColor: "rgba(255, 99, 133, 0.31)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const chartSize = { height: 250, width: 350 };

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* Cards with icons left of text */}
     <Row className="mb-4">
  {cardData.map(({ title, count, icon }, idx) => (
    <Col key={idx} md={3}>
      <Card className="shadow-sm border">
        <Card.Header
          style={{
            backgroundColor: "#d1d1d1", // medium grey
            display: "flex",
            alignItems: "center",
            fontSize: "1.05rem",
            fontWeight: "600",
            gap: "0.5rem",
          }}
        >
          {icon}
          <span>{title}</span>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "#f5f5f5" }}> {/* light grey */}
          <div
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
            }}
          >
            {count}
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


      {/* Row with Line and Pie charts */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header>Sales Graph</Card.Header>
            <Card.Body style={{ height: "22.3rem" }}>
              <Line data={lineData} height={300} width={550} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Header>Votes Pie Chart</Card.Header>
            <Card.Body style={{ height: "359px", width: "100%" }}>
              <Pie data={pieData} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Header>Votes Pie Chart</Card.Header>
            <Card.Body style={{ height: "359px", width: "100%" }}>
              <Pie data={pieData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* New Row with 3 different charts */}
      <Row>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Header>Bar Chart</Card.Header>
            <Card.Body style={{ height: "22rem" }}>
              <Bar data={barData} height={chartSize.height} width={chartSize.width} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Header>Doughnut Chart</Card.Header>
            <Card.Body style={{ height: "22rem" }}>
              <Doughnut data={doughnutData} height={chartSize.height} width={chartSize.width} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Header>Radar Chart</Card.Header>
            <Card.Body style={{ height: "22rem" }}>
              <Radar data={radarData} height={chartSize.height} width={chartSize.width} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
