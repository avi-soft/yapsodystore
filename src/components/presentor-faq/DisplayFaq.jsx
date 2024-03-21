"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlArrowUp,SlArrowDown } from "react-icons/sl";
import "./style.css";

const DisplayFq = ({ faq, index, expandIndex, setExpandIndex }) => {
  const isExpanded = index === expandIndex;

  const toggleAnswerVisibility = () => {
    setExpandIndex(isExpanded ? null : index);
  };

  return (
    <div className="present-faq transition-all" style={{paddingTop:'17px', paddingBottom:'21px'}}>
      <div className="inside-faq " onClick={toggleAnswerVisibility}>
        <div
          style={{
            fontWeight: "600",
            color: "rgba(1, 22, 56, 0.7)",
            
            flex: 90,
            fontSize: "1rem",
            padding: "0px 15px",
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
            justifyContent: "start",
            color: '#757272',
            fontSize: "18px",
            paddingTop:'3px',
            paddingLeft:'25px'
          }}
        >
          <spa>{isExpanded ? <SlArrowUp />  : <SlArrowDown />}</spa>
        </div>
      </div>

      {isExpanded && (
        <div
          style={{ color: "#343131", margin:'25px 0 14px 15px' }}
        >
          {faq.ans}
        </div>
      )}
    </div>
  );
};

export default DisplayFq;
