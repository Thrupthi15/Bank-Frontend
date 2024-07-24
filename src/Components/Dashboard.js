import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user details from localStorage
    localStorage.removeItem('userId');
    localStorage.removeItem('password');
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2>Admin Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="button-container">
        <button className="dashboard-button" onClick={() => navigate('/register-branch-manager')}>Register Branch Manager</button>
        <button className="dashboard-button" onClick={() => navigate('/view-branch-managers')}>View Bank/Branch Manager</button>
        <button className="dashboard-button" onClick={() => navigate('/bank-accounts')}>Bank Accounts</button>
        <button className="dashboard-button" onClick={() => navigate('/customers')}>Customers</button>
        <button className="dashboard-button" onClick={() => navigate('/transactions')}>Transactions</button>
      </div>
    </div>
  );
};

export default Dashboard;
