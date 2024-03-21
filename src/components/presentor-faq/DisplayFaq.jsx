"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./style.css";

const DisplayFq = ({ faq, index, expandIndex, setExpandIndex }) => {
  const isExpanded = index === expandIndex;

  const toggleAnswerVisibility = () => {
    setExpandIndex(isExpanded ? null : index);
  };

  return (
    <div className="present-faq py-[16px] transition-all">
      <div className="inside-faq " onClick={toggleAnswerVisibility}>
        <div
          style={{
            fontWeight: "600",
            color: "rgba(1, 22, 56, 0.7)",
            cursor: "pointer",
            flex: 90,
            fontSize: "1rem",
            padding: "0px 10px",
            fontFamily: "Lato",
          }}
          onClick={toggleAnswerVisibility}
        >
          <h4>{faq.quest}</h4>
        </div>
        <div
          style={{
            flex: 10,
            display: "flex",
            justifyContent: "center",
            color: "grey",
            fontSize: "22px",
          }}
        >
          <span>{isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
      </div>

      {isExpanded && (
        <div
          style={{ color: "#343131", marginTop: "24px", marginLeft: "14px" }}
        >
          {faq.ans}
        </div>
      )}
    </div>
  );
};

export default DisplayFq;
