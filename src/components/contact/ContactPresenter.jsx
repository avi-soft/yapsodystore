import React from "react";
import { MdEmail } from "react-icons/md";

const ContactPresenter = ({ size, color }) => {
  return (
    <div className="flex gap-4 cursor-pointer" style={{ color: color }}>
      <span>
        <MdEmail className={`${size}`} />
      </span>
      <span>Contact Presenter</span>
    </div>
  );
};

export default ContactPresenter;
