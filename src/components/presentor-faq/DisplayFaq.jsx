"use client";
import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./style.css";

const DisplayFq = ({ faq }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <div className="present-faq">
      <div
        className="inside-faq cursor-pointer"
        onClick={toggleAnswerVisibility}
      >
        <div
          style={{
            fontWeight: "600",
            color: "rgba(1, 22, 56, 0.7)",
            cursor: "pointer",
            flex: 80,
            fontSize: "1rem",
          }}
          // onClick={toggleAnswerVisibility}
        >
          {faq.question}
        </div>
        <div
          style={{
            flex: 20,
            display: "flex",
            justifyContent: "center",
            color: "grey",
          }}
        >
          <span>
            {isAnswerVisible ? (
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            ) : (
              <span>
                <MdOutlineKeyboardArrowUp />
              </span>
            )}
          </span>
        </div>
      </div>

      {isAnswerVisible && (
        <div style={{ color: "#343131", margin: "9px 0px " }}>{faq.answer}</div>
      )}
    </div>
  );
};

export default DisplayFq;
