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
<<<<<<< HEAD
    <div className='present-faq' >
      <div className='inside-faq ' onClick={toggleAnswerVisibility} >
=======
    <div className="present-faq py-[16px] transition-all">
      <div className="inside-faq " onClick={toggleAnswerVisibility}>
>>>>>>> 905ece3834735aabe28b71388b1afc9b96d6a69e
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
<<<<<<< HEAD
        <div style={{ flex: 10, display: 'flex', justifyContent: 'center', color: 'grey', fontSize: '22px', transitionDelay:'5s' }}>
=======
        <div
          style={{
            flex: 10,
            display: "flex",
            justifyContent: "center",
            color: "grey",
            fontSize: "22px",
          }}
        >
>>>>>>> 905ece3834735aabe28b71388b1afc9b96d6a69e
          <spa>{isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}</spa>
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
