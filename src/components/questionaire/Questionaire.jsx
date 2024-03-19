import React, { useState } from 'react';
import Image from 'next/image';

import cross from './cross.svg';

const Questionaire = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formEntries, setFormEntries] = useState([
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone Number' },
    { id: 'home_address', label: 'Home Address' },
    { id: 'gender', label: 'Gender' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nextContent, setNextContent] = useState(null);

  const handleNextButtonClick = () => {
    setNextContent(
      <div className='h-[320px] flex flex-col'>
        <span className='px-3 text-2xl'>Submit your attendee Questionnaire</span>
        <span className='px-3 twxt-md'>Please click on button to proceed ahead.</span>
      </div>
    );
    setIsModalOpen(true);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'
        }`}
    >
      <div className="bg-white p-2 rounded-md w-[700px] overflow-hidden flex flex-col">
        {/* Fixed Header */}
        <div className="items-center m-2 border-b pb-3 mb-3">
          <div className="flex justify-between">
            <span className="text-md font">a - 1, General Admission</span>
            <Image src={cross} alt="Close" className="cursor-pointer" onClick={onClose} />
          </div>
          <span className="text-sm text-gray-500 mb-2">Please fill attendee details</span>
        </div>

        {/* Scrollable Form Section */}
        {isModalOpen ? (
          <div className="overflow-auto flex-grow h-[300px]">{nextContent}</div>
        ) : (
          <div className="overflow-auto flex-grow h-[300px]">
            {formEntries.map((entry) => (
              <div key={entry.id} className="mb-4">
                <label htmlFor={`entry_${entry.id}`} className="block text-sm font-medium text-gray-700">
                  {entry.label}
                </label>
                <input
                  type="text"
                  value={"Enter text"}
                  id={`entry_${entry.id}`}
                  name={`entry_${entry.id}`}
                  onChange={(e) => handleInputChange(entry.id, e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-sm w-[250px] gray size-8 text-gray-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* Fixed Footer */}
        <div>
          <hr className="my-2" />
          {isModalOpen ? (
            <div>
              <button
                className="py-2 m-3 text-purple-600 underline rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Go back
              </button>
              <button className="px-3 ml-2 py-2 bg-purple-700 text-white rounded-sm"
                onClick={onClose}
              >
                Continue
              </button>
            </div>
          ) : (
            <button
              className="px-3 py-2 bg-purple-700 text-white rounded-md"
              onClick={handleNextButtonClick}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionaire;

