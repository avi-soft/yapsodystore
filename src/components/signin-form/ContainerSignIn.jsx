"use client";
import "./style.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginImage from "@/../public/login-image.png";
import FormSignin from "./SigninForm";
export default function MidContainer({ color }) {
  return (
    <div className="inside-main-signin">
      <div className="login-image" style={{ flex: 43, padding: 8 }}>
        <Image
          src={LoginImage}
          alt="image"
          style={{ objectFit: "cover", width: "356px", height: "375.55px" }}
        />
      </div>
      <div className="login-form">
        <div>
          <div className="login-title font-lato ">Login</div>
        </div>
        <FormSignin />
        <div className="createorbutton">
          <div className="linkforsignin">
            <Link
              href="https://staging.yapsody.com/ticketing/forgot-password?customer=true"
              className="pointer-events-auto underline font-lato"
              style={{ color: color }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >{`Create/Forgot my Password`}</Link>
          </div>
          <div
            className="button-login font-lato"
            style={{ backgroundColor: color }}
          >
            <button
              className="pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
