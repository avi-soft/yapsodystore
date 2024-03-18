import Link from "next/link";
import "./style.css";
function Contact() {
  return (
    <>
      {/* By activating we can check that form is show and hide whwn its State changes by clicking on the button */}

      {/* <button type="button" className='bg-blue-500' onClick={changeState}>Click me</button> */}
      <div className="contact-page-resp">
        <div className=" h-full flex flex-col items-center w-[100%]">
          <div className="relative border rounded  w-[100%] p-4">
            <h3 className="py-2 text-lg">Contact Presenter</h3>
            <form action="" className="text mb-4 text-slate-500">
              <div className="contact-middle-part">
                <div className="mb-4">
                  <label className="border-[#ccc]" htmlFor="">
                    Event Name
                  </label>{" "}
                  <span className="text-red-500">*</span>
                  <br />
                  <select className="border border-[#ccc] text-slate-700 rounded w-full mt-1 py-2 px-4">
                    <option value="MULTI Events">MULTI Events</option>
                    <option value="RS Event 28603">RS Event 28603</option>
                    <option value="GA-SD">GA-SD</option>
                    <option value="RS-SD">RS-SD</option>
                    <option value="Copy of GA-SD">Copy of GA-SD</option>
                    <option value="Copy of RS-SD">Copy of RS-SD</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="" htmlFor="">
                    Full Name
                  </label>
                  <span className="text-red-500">*</span>
                  <br />
                  <input
                    className="border border-[#ccc] rounded w-full outline-blue-300 mt-1 py-2 px-4"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 " htmlFor="">
                    Email
                  </label>
                  <span className="text-red-500">*</span>
                  <br />
                  <input
                    className="border border-[#ccc] rounded w-full outline-blue-300 mt-1 py-2 px-4"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1" htmlFor="">
                    Message
                  </label>
                  <span className="text-red-500">*</span>
                  <br />
                  <textarea
                    className="border border-[#ccc] rounded w-full outline-blue-300 mt-1 py-2 px-4 h-32 resize-none"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="mb-4">
                <div
                  className="flex justify-between"
                  id="contact-bottom-respons"
                >
                  <div className="text-xs">
                    <span>
                      For technical questions please <br></br>contact{" "}
                    </span>
                    <Link className="text-purple-400" href="/">
                      {" "}
                      Yapsody Customer Support.
                    </Link>
                  </div>
                  <div className="contact-form_button">
                    <button className="bg-purple-400 tracking-wide text-white w-36 font-medium text-sm py-2 px-4 rounded">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
