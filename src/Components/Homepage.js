import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Homepage() {
  const percentage_orders = 40;
  const percentage_pending = 61;
  const percentage_delivered = 89;
  const percentage_shipped = 57;

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
            <div style={{ width: 60, height: 60 }}>
              <CircularProgressbar
                styles={buildStyles({
                  trailColor: "#388D70",
                  textColor: "#fff",
                  pathColor: `rgba(255, 255, 255, ${percentage_orders / 100})`,
                })}
                value={percentage_orders}
                text={`${percentage_orders}`}
              />
            </div>
          </div>
          {/* PENDING */}
          <div className="pending">
            <div>
              <i class="fa-regular fa-clipboard"></i>
              <p>Pending</p>
            </div>
            <div style={{ width: 60, height: 60 }}>
              <CircularProgressbar
                styles={buildStyles({
                  trailColor: "#d4d9e3",
                  textColor: "#2E7E2E",
                  pathColor: `rgba(46, 126, 46, ${percentage_pending / 100})`,
                })}
                value={percentage_pending}
                text={`${percentage_pending}`}
              />
            </div>
          </div>
          {/* Delivered */}
          <div className="delivered">
            <div>
              <i class="fa-solid fa-clipboard-list"></i>
              <p>Delivered</p>
            </div>
            <div>
              <div style={{ width: 60, height: 60 }}>
                <CircularProgressbar
                  styles={buildStyles({
                    trailColor: "#d4d9e3",
                    textColor: "#5E5672",
                    pathColor: `rgba(250, 106, 0, ${
                      percentage_delivered / 100
                    })`,
                  })}
                  value={percentage_delivered}
                  text={`${percentage_delivered}`}
                />
              </div>
            </div>
          </div>
          {/* Shipped */}
          <div className="shipped">
            <div>
              <i class="fa-solid fa-car"></i>
              <p>shipped</p>
            </div>
            <div>
              <div style={{ width: 60, height: 60 }}>
                <CircularProgressbar
                  styles={buildStyles({
                    trailColor: "#d4d9e3",
                    textColor: "#5E5672",
                    pathColor: `#0588CE, ${percentage_shipped / 100})`,
                  })}
                  value={percentage_shipped}
                  text={`${percentage_shipped}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <div className="Overview">
          {/* Monthly overview */}
          <div className="all-overview">
            <div className="monthly-overview">
              <p>monthly Overview</p>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="home-img">
              <img src="/images/Graph.jpeg" className="graph-img"></img>
            </div>
          </div>

          {/* Total cost */}
          <div className="total-cost">
            <div className="top-cost">
              <p>Total Cost</p>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="plain-texts">
              <p className="incre-text">85% increase</p>
              <p className="italics-text">Compared to $84,325.00 last month</p>
            </div>

            <div className="low-deliverytext">
              <div className="deliveryicon">
                <i class="fa-solid fa-truck-field"></i>
              </div>
              <div className="delivery-minitext">
                <p className="delivery-text">Delivery cost</p>
                <p className="mdn-text">MTD IN KES</p>
              </div>
            </div>
            <div className="handling">
              <div>
                <i class="fa-solid fa-comments-dollar"></i>
              </div>
              <div className="handlinglower-text">
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
              <div className="allratestext1">
                <p className="ratestext1">Ontime Delivery Rate</p>
                <p className="ratestext2">80%</p>
                <p className="ratestext3">Weekly Profit</p>
              </div>
            </div>
            <div className="rates-2">
              <div className="rates2-icon">
                <i class="fa-solid fa-dollar-sign" id="icon3"></i>
                <i className="fa-solid fa-ellipsis-vertical" id="icon2"></i>
              </div>
              <div className="allratestext2">
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
            <div className="top-customersheading">
              <p>Top customers</p>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <table className="table-entry1">
              <tr className="Heading-table1">
                <th>No.</th>
                <th>Client</th>
                <th>Phone</th>
                <th>Amount</th>
              </tr>
              <tr className="table-data">
                <td>1.</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>$6700</td>
              </tr>
              <tr className="table-data">
                <td>2.</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>$8700</td>
              </tr>
              <tr className="table-data">
                <td>3.</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>$700</td>
              </tr>
              <tr className="table-data">
                <td>4.</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>$6200</td>
              </tr>
            </table>
          </div>
          <div className="orders-list">
            <table className="table-entry2">
              <tr className="Heading-table2">
                <th>OrderNo.</th>
                <th>Client</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Order Amount</th>
                <th>Paid Amount</th>
                <th>Status</th>
              </tr>
              <tr className="table-data2">
                <td>#11</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>08/08/2023</td>
                <td>$9000</td>
                <td>$6700</td>
                <td>pending</td>
              </tr>
              <tr className="table-data">
                <td>#12</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>08/08/2023</td>
                <td>$9000</td>
                <td>$6700</td>
                <td>pending</td>
              </tr>
              <tr className="table-data">
                <td>#13</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>08/08/2023</td>
                <td>$9000</td>
                <td>$6700</td>
                <td>pending</td>
              </tr>
              <tr className="table-data">
                <td>#14</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>08/08/2023</td>
                <td>$9000</td>
                <td>$6700</td>
                <td>pending</td>
              </tr>
              <tr className="table-data">
                <td>#15</td>
                <td>Gathoni Wanjira</td>
                <td>+254700111222</td>
                <td>08/08/2023</td>
                <td>$9000</td>
                <td>$6700</td>
                <td>pending</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
