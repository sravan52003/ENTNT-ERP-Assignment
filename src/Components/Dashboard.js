import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  // these numbers are fetched from an API
  const totalProducts = 12;
  const totalOrders = 4;

  return (
    <div className="container">
      <h2 className="title">ERP System</h2>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3>All Products</h3>
            <p>{totalProducts}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>All Orders</h3>
            <p>{totalOrders}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Calendar</h3>
            <p>Go to Calendar</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
