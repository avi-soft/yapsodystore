import React from "react";
import Link from "next/link";
import PaymentMethodList from "./PaymentMethodList";
import PurchaserQuestionnaires from "./PurchaserQuestionnaires";
import UserEmail from "./UserEmail";
import LoggedInUser from "./LoggedInUser";
import GeneralInstructions from "./GeneralInstructions";

const CheckOutLeftPage = ({ color }) => {
  const Paymentmethods = [
    {
      title: "Credit Card",
    },
    {
      title: "Pay Later",
      description: "Pay Later Instructions:",
    },
    {
      title: "PayPal",
      photo: "https://yaptestaddon4.staging.yapsody.com/images/paypal.png",
    },
  ];

  const Questionnaires = [
    // {
    //   question: "Cell Phone",
    //   responseType: "textbox",
    // },
    // {
    //   question: "Gender",
    //   responseType: "dropdown",
    //   options: ["Male", "Female", "Others"],
    // },
  ];

  const user = false;

  return (
    <div className="mt-15px mb-auto block bg-white pb-[100px] pl-12">
      <p className="mb-[10px] block text-[22px] font-[600] tracking-wider text-[rgba(51,51,51,0.7)]">
        Checkout
      </p>
      <div>{user ? <LoggedInUser /> : <UserEmail />}</div>
      <div>
        <hr className="w-[50%]"></hr>
      </div>
      {Questionnaires.length ? (
        <div>
          <h1 className="text-[20px] mb-[15px] mt-[15px]">
            Purchaser Questinnaire
          </h1>
          {Questionnaires.map((question, index) => (
            <div className="flex flex-col" key={question.question}>
              <PurchaserQuestionnaires
                question={question}
                color={color}
                index={index}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div>
        <GeneralInstructions color={color} />
        <div className="rounded-[6px] bg-[#ffffff] py-[10px]">
          <p className="mt-[12px] text-[22px] font-[600] tracking-wider text-[rgba(51,51,51,0.7)]">
            Select an option you want to checkout with
          </p>
          <div>
            <PaymentMethodList Paymentmethods={Paymentmethods} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutLeftPage;
