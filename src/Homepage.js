import React from "react";

function Homepage() {
  return (
    <div className="App-ui">
      {/* SIDEBAR */}
      <div className="Sidebar">
        <div id="onlyicon">
          <i className="fa-regular fa-snowflake"></i>
        </div>
        <div className="sideContent" id="dashtext">
          <i className="fa-solid fa-border-all"></i>
          <p id="dash-p">Dashboard</p>
        </div>
        <div className="sideContent">
          <i className="fa-solid fa-border-all"></i>
          <p>Customers</p>
        </div>
        <div className="sideContent">
          <i className="fa-solid fa-border-all"></i>
          <p>Orders</p>
        </div>
        <div className="sideContent">
          <i className="fa-solid fa-border-all"></i>
          <p>Settings</p>
        </div>
        <div className="sideContent">
          <i className="fa-solid fa-border-all"></i>
          <p>Finance</p>
        </div>
        <div className="sideContent">
          <i className="fa-solid fa-border-all"></i>
          <p>Stock</p>
        </div>
        <div className="sideContent">
          <i className="fa-solid fa-border-all"></i>
          <p>Driver</p>
        </div>
      </div>
      {/* MAIN PAGE */}
      <div className="main-content">
        {/* NAVBAR */}
        <div className="Navbar">
          <div className="welcome">
            <p className="User">
              Hello Gathoni <i className="fa-solid fa-face-smile"></i>
            </p>
            <p className="compliment">Happy to see you back!</p>
          </div>
          <div className="top-searchbar">
            <div id="searchbar">
              <i className="fa-solid fa-magnifying-glass" id="searchIcon"></i>
              <input type="text" placeholder="search" />
            </div>
          </div>
          <div className="nav-end">
            <i class="fa-solid fa-bell" id="bellicon"></i>
            <img
              src="https://i.scdn.co/image/ab6761610000e5ebb0527c32ded4594c557f613a"
              className="usericon"
            ></img>
          </div>
        </div>
        {/* DASHBOARD */}
        <p className="dash-heading">Dashboard</p>
        <div className="Dashboard">
          {/* ORDERS */}
          <div className="orders">
            <div>
              <i class="fa-solid fa-chart-line"></i>
              <p>Orders</p>
            </div>
            <div>
              <p className="number">40</p>
            </div>
          </div>
          {/* PENDING */}
          <div className="pending">
            <div>
              <i class="fa-regular fa-clipboard"></i>
              <p>Pending</p>
            </div>
            <div>
              <p>61</p>
            </div>
          </div>
          {/* Delivered */}
          <div className="delivered">
            <div>
              <i class="fa-solid fa-clipboard-list"></i>
              <p>Delivered</p>
            </div>
            <div>
              <p>89</p>
            </div>
          </div>
          {/* Shipped */}
          <div className="shipped">
            <div>
              <i class="fa-solid fa-car"></i>
              <p>shipped</p>
            </div>
            <div>
              <p>57</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="Overview">
          {/* Monthly overview */}
          <div className="monthly-overview">
            <p>monthly Overview</p>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          {/* Total cost */}
          <div className="total-cost">
            <div className="top-cost">
              <p>Total Cost</p>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <p className="incre-text">85% increase</p>
            <p className="italics-text">Compared to $84,325.00 last month</p>
            <div className="low-deliverytext">
              <i class="fa-solid fa-truck-field"></i>
              <div>
                <p className="delivery-text">Delivery cost</p>
                <p className="mdn-text">MTD IN KES</p>
              </div>
            </div>
            <div className="handling">
              <i class="fa-solid fa-comments-dollar"></i>
              <div>
                <p className="handling-text">Handling cost</p>
                <p className="mdn-text">MTD IN KES</p>
              </div>
            </div>
          </div>
          {/* RATES */}
          <div className="rates">
            <div className="rates-1">
            <div className="rates1-icon">
            <i className="fa-solid fa-chart-column" id="icon1"></i>
            <i className="fa-solid fa-ellipsis-vertical" id="icon2"></i>
            </div>
            <div>
                <p className="ratestext1">Ontime Delivery Rate</p>
                <p className="ratestext2">80%</p>
                <p className="ratestext3">Weekly Profit</p>
            </div>
            </div>
            <div  className="rates-2">
            <div className="rates2-icon">
            <i class="fa-solid fa-dollar-sign" id="icon3"></i>
            <i className="fa-solid fa-ellipsis-vertical" id="icon2"></i>
            </div>
            <div>
                <p className="ratestext1">Average Delivery Time</p>
                <p className="ratestext2">4 days</p>
                <p className="ratestext3">Past Month</p>
            </div>
            </div>
          </div>
        </div>
        {/* CUSTOMERS */}
        <div className="customers">
<div className="top-customers">


</div>
<div className="orders-list">
    

</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
