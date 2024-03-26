import React, { useState, useRef } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./style.css";

const DisplayFq = ({ faq, index, expandIndex, setExpandIndex }) => {
  const isExpanded = index === expandIndex;
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleAnswerVisibility = () => {
    setHeight(isExpanded ? 0 : answerRef.current.scrollHeight);
    setExpandIndex(isExpanded ? null : index);
  };

  return (
    <div className="present-faq" style={{ paddingTop: "17px", paddingBottom: "21px" }}>
      <div className="inside-faq justify-between" onClick={toggleAnswerVisibility}>
        <div
          style={{
            fontWeight: "600",
            color: "rgba(1, 22, 56, 0.7)",
            flex: 90,
            fontSize: "1rem",
            fontFamily: "Lato",
            justifyContent: "space-between"
          }}
        >
          <h4>{faq.quest}</h4>
        </div>
        <div className="float-right" style={{ color: "#757272", fontSize: "18px", paddingTop: "3px" }}>
          <span>{isExpanded ? <SlArrowUp /> : <SlArrowDown />}</span>
        </div>
      </div>

      <div
        ref={answerRef}
        className="answer"
        style={{ height: `${isExpanded ? answerRef.current?.scrollHeight : 0}px`, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <div style={{ color: "#343131", margin: "23px 0 9px 0px" }}>
          {faq.ans}
        </div>
      </div>
    </div>
  );
};

export default DisplayFq;