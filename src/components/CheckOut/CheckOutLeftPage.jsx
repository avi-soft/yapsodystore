import React from 'react'
import Link from 'next/link'

import PaymentMethodList from './PaymentMethodList'
import PurchaserQuestionnaires from './PurchaserQuestionnaires'

const CheckOutLeftPage = () => {
  
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
        // },
      ];
    
      const user = false;
    
      return (
        <div className="mt-15px mb-auto block bg-white pb-[100px] pl-12">
          <p className="mb-[10px] block text-[22px] font-[600] tracking-wider text-[rgba(51,51,51,0.7)]">
            Checkout
          </p>
          <div>
            {user ? (
              <p className="mb-[20px] mt-[20px] font-semibold text-[var(--text-primary)]">
                You're logged in as abc@gmail.com
              </p>
            ) : (
              <form className="rounded-[6px] py-[10px]">
                <div className="ml-[-10px] mr-[-10px] w-[70%]">
                  <div className="relative min-h-[1px] w-[100%] pl-[10px] pr-[10px]">
                    <div className="mb-[15px]">
                      <label className="mb-[5px] inline-block max-w-[100%] text-[14px] font-normal tracking-wide text-[rgba(1,22,56,0.7)]">
                        Email Address
                      </label>
                      <span className="text-[red]">*</span>
                      <input className="focus:  block h-[34px] w-[100%] rounded-[4px] border-[1px] border-[rgba(0,21,56,0.25)] bg-[#fff] px-[12px] py-[6px] text-[14px] text-[#555] shadow outline-none transition-all duration-300 ease-in-out focus:border-[1px] focus:border-[rbga(81,203,238,1)] focus:shadow-[0px_0px_5px] focus:shadow-[#86e2ea]"></input>
                    </div>
                    <div className="mb-[15px]">
                      <label className="mb-[5px] inline-block max-w-[100%] text-[14px] font-normal tracking-wide text-[rgba(1,22,56,0.7)]">
                        Re-enter Email Address
                      </label>
                      <span className="text-[red]">*</span>
                      <input className="focus:  block h-[34px] w-[100%] rounded-[4px] border-[1px] border-[rgba(0,21,56,0.25)] bg-[#fff] px-[12px] py-[6px] text-[14px] text-[#555] shadow outline-none focus:border-[1px] focus:border-[rbga(81,203,238,1)] focus:shadow-[0px_0px_5px] focus:shadow-[#86e2ea]"></input>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div>
            <hr className="w-[50%]"></hr>
          </div>
          {Questionnaires.length ? (
            <div>
              <h1>Purchaser Questinnaire</h1>
              {Questionnaires.map((question) => (
                <div className="flex flex-col" key={question.question}>
                  <PurchaserQuestionnaires question={question} />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <div>
            <div className="mb-[10px] mt-[15px] rounded-[6px]">
              <div>
                <h3 className="mb-[20px] text-[22px] font-[600] tracking-wide text-[rgba(51,51,51,0.7)] ">
                  How do you want to recieve your tickets?
                </h3>
                <div className="mr-[15px] flex gap-1">
                  <label className="relative mb-[5px] min-h-[20px] max-w-[100%] cursor-pointer pl-[25px] text-[14px] font-normal text-[rgba(1,22,56,0.7)]"></label>
                  <input
                    type="radio"
                    className="absolute mt-[3px] size-4 h-[20px] w-[20px] border-2 border-solid border-[var(--highlightColor)] bg-[var(--highlightColor)] text-[var(--highlightColor)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0,0.12)]"
                    defaultChecked
                  ></input>
                  <span className="text-[18px]">Print/Email</span>
                </div>
                <div></div>
              </div>
            </div>
            <div>
              {/* <article className="mt-[32px] flex"> */}
              <div className="mb-[5px] mt-[25px] inline-flex cursor-pointer items-center">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-2"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-[var(--highlightColor)] transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-[var(--highlightColor)] before:opacity-0 before:transition-opacity checked:border-[var(--highlightColor)] checked:bg-[var(--highlightColor)] checked:before:bg-[var(--highlightColor)] hover:before:opacity-10 checked:hover:bg-[var(--highlightColor)] focus:ring-transparent before:focus:bg-[var(--highlightColor)]"
                    id="check"
                    defaultChecked
                  />
                  <span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-light text-gray-700"
                  htmlFor="check"
                >
                  Yapsody may notify me of special offers and events in my area
                </label>
              </div>
              {/* </article> */}
              <div className="mb-[5px] flex cursor-pointer">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-2"
                  htmlFor="check1"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-[var(--highlightColor)] transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-[var(--highlightColor)] before:opacity-0 before:transition-opacity checked:border-[var(--highlightColor)] checked:bg-[var(--highlightColor)] checked:before:bg-[var(--highlightColor)] hover:before:opacity-10 checked:hover:bg-[var(--highlightColor)] focus:ring-transparent"
                    id="check1"
                    defaultChecked
                  />
                  <span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-[8px] cursor-pointer select-none font-light text-gray-700"
                  htmlFor="check1"
                >
                  Presenter may notify me of special offers and events
                </label>
              </div>
              <div className="mb-[5px] mt-[20px] border-b">
                <p className="mb-[10px] text-[14px] font-normal text-[rgba(1,22,56,0.7)]">
                  <span className="">
                    By continuing, you agree to Yapsody
                    <Link
                      href={"https://staging.yapsody.com/ticketing/terms-of-use/"}
                      className="text-[var(--highlightColor)] underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and acknowledge that merchants/presenters set their own refund
                    policies.
                  </span>
                  <span>Payments securely processed throughYapSecure</span>
                </p>
              </div>
            </div>
            <div className="rounded-[6px] bg-[#ffffff] py-[10px]">
              <p className="mt-[12px] text-[22px] font-[600] tracking-wider text-[rgba(51,51,51,0.7)]">
                Select an option you want to checkout with
              </p>
              <div>
                <PaymentMethodList Paymentmethods={Paymentmethods} />
                {/* <EventList/> */}
              </div>
            </div>
          </div>
        </div>
  )
}

export default CheckOutLeftPage
