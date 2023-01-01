/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../public/logo.png";
import mainStyle from "../../styles/main.module.css";
import Image from "next/image";

function Logo() {
  return (
    <div className={mainStyle.logoleft}>
      <Image src={logo} />
    </div>
  );
}

export default Logo;
