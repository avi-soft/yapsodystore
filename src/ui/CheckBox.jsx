import React from "react";

const CheckBox = ({ id, color }) => {
  return (
    <label
      className="relative flex cursor-pointer items-center rounded-full p-2"
      htmlFor={id}
    >
      <input
        type="checkbox"
        className={`before:content[''] peer relative h-6 w-6 cursor-pointer 
          appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full  before:opacity-0 before:transition-opacity  hover:before:opacity-10 focus:ring-transparent`}
        style={{
          borderColor: color,
          backgroundColor: color,
          ":before": { backgroundColor: color },
          ":checked": { border: color },
          ":checked": { backgroundColor: color },
          ":checked:hover": { color: color },
          ":before:focus:": { backgroundColor: color },
        }}
        id={id}
        defaultChecked
      />
      <span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </label>
  );
};

export default CheckBox;
