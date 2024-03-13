import React from "react";
import Script from "next/script";
import "./style.css";
const Page = () => {
  return (
    <div className="page-divide">
      <Script
        src="https://kit.fontawesome.com/8d4b434c6d.js"
        crossorigin="anonymous"
      />
      <div className="left-page">
        <div className="getticket-main">
          <div className="mainbox-event">
            <div className="divide-main">
              <div className="box">
                <div className="diagonal">MULTI Events</div>
              </div>
              <div className="event-name">MULTI Events</div>
            </div>
            <div className="get-time">
              <div style={{ marginBottom: 10 }}>
                <i
                  className="fa-solid fa-laptop"
                  style={{ marginRight: 5 }}
                ></i>
                Asia/Calcutta
              </div>
              <div>
                <i className="fa-solid fa-clock" style={{ marginRight: 5 }}></i>
                2024-04-19 17:00
              </div>
            </div>
          </div>
          <div className="select-ticket">
            <div className="part">
              <div className="upper-part">Adult </div>
            </div>
            <div className="part">
              <div className="mid-part">
                <div className="dollar">$50.00</div>
              </div>
            </div>
            <div className="part">
              <div className="lower-part">
                <label for="quantity">Quantity</label>
                <select name="quantity" className="quantity">
                  <option
                    value="select"
                    style={{ color: "gray" }}
                    selected
                    disabled
                  >
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-page">Right part</div>
    </div>
  );
};

export default Page;
