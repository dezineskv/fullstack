import React from "react";
import "../styles/global.css";
// import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-h w-full flex flex-row justify-between">
      <nav className="flex flex-col justify-between space-x-4">
        <div>
          <a
            href="/"
            className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </a>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto text-white p-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {/* <div className="max-w[200px] p-6">
            <Link to="/">
              <img src="/images/logo_white.png" alt="logo" />
            </Link>
          </div> 

          <div className="flex items-center">
            <div className="header-search p-6">{/* <SearchBox /> </div>
            <div>
              <img src="/images/profileicon.png" alt="profile icon" />
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
