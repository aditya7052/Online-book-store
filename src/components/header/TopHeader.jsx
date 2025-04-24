import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import {IoMenu} from 'react-icons/io5'
const TopHeader = ({ menuClicked, setMenuClicked }) => {
  return (
    <>
      <div className="top-header header-section">
        <IoMenu
          className="bi bi-list"
          onClick={() => {
            setMenuClicked(!menuClicked);
          }}/>
        <div className="phone">
          <BsFillTelephoneFill className="bi bi-telephone-fill" />
          7004429452
        </div>
        <h2>Welcome To Bookyy</h2>
        <Link to="/login" className="login-link">

          <IoMdPerson className="bi bi-person-fill"/>
          Login
        </Link>
      </div>
      <hr />
    </>
  );
};

export default TopHeader;
