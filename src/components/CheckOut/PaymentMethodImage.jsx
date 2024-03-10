import React from "react";
import Image from "next/image";

const PaymentMethodImage = ({ method }) => {
  return (
    <Image
      src={method.photo}
      className="float-right"
      width={100}
      height={100}
    ></Image>
  );
};

export default PaymentMethodImage;
