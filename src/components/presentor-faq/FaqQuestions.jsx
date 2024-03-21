"use client";
import FreqQuest from "./DisplayFaq";
import { useEffect, useState } from "react";
import "./style.css";
import { getFaqs } from "@/helpers/api-utils";
export default function FaqQues() {
  const [expandIndex, setExpandIndex] = useState(null);
  const [faqQues, setFaqQues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaqs().then((data) => {
      setFaqQues(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="Freq-main-page">
      <div className="right-faq">
        <div className="freqaskquest">Frequently Asked Questions</div>
        {loading ? (
          <div className="px-2 py-2 text-[18px]">Loading...</div>
        ) : (
          <div className="container">
            {faqQues.map((value, index) => (
              <div
                key={index}
                className="border-b border-1  w-[100%]"
              >
                <FreqQuest
                  faq={value}
                  index={index}
                  expandIndex={expandIndex}
                  setExpandIndex={setExpandIndex}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
