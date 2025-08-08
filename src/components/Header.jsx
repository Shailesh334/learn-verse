import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenuList } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleShowMenu = ()=>{
    dispatch(toggleMenuList());
  }
  return (
    <div className="flex h-8 justify-between m-4 ">
      <div className="flex">
        <img
          onClick={handleShowMenu}
          className=" cursor-pointer hover:bg-gray-100 rounded-full"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        
        <img
        
          className="ml-4"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Verse-LOGO.png"
        />
      </div>

      <div className="w-1/2">
        <input className="border border-gray-300 w-[70%] p-2 rounded-l-full"></input>
        <button className="border border-gray-300 p-2 rounded-r-full px-4 bg-gray-100 hover:bg-gray-200 cursor-pointer">
          Search
        </button>
      </div>

      <div>
        <img
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
          className="h-8 mr-3"
        />
      </div>
    </div>
  );
};

export default Header;
