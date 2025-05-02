import React from "react";
import { Link } from "react-router-dom";
import amazon_PNG11 from "../assets/amazon_PNG11.png";
import SearchIcon from "@mui/icons-material/Search";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={amazon_PNG11} className="header_logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav ">
        {/* 1st Link */}

        <Link to={"/login"} className="header_link">
          <div className="header_option">
            <span className="text-sm">Hello Qazi</span>
            <span className="text-lg font-bold">Sign In</span>
          </div>
        </Link>

        <Link to={"/"} className="header_link">
          <div className="header_option">
            <span className="text-sm">Returns</span>
            <span className="text-lg font-bold">& Orders</span>
          </div>
        </Link>

        <Link to={"/"} className="header_link">
          <div className="header_option">
            <span className="text-sm">Your </span>
            <span className="text-lg font-bold">Prime</span>
          </div>
        </Link>
      </div>
      <Link to={"/checkout"}>
        <div className="cart flex text-white gap-2  ">
          <FaCartArrowDown className="text-2xl" />
          <p>0</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
