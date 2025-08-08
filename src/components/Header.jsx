import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuList } from "../utils/appSlice";
import { YT_SEARCH_SUGGESTION_API } from "../utils/constants";
import { addSearchSuggestions } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector(store =>store.search.searchCache);
 

  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);

  const getSearchSuggestion = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        YT_SEARCH_SUGGESTION_API + searchInput
      )}`
    );

    const json = await data.json();
    const searchSuggestions = [];
    json?.contents.split("[").forEach((ele, index) => {
      if (!ele.split('"')[1] || index === 1) return;
      return searchSuggestions.push(ele.split('"')[1]);
    });
    setSearchSuggestions(searchSuggestions);
    dispatch(addSearchSuggestions({ [searchInput]: searchSuggestions }));
  };

  useEffect(() => {
    if (searchInput === "" ) {
      setShowSearchSuggestion(false);
      setSearchSuggestions([]);
      return;
    }
    setShowSearchSuggestion(true);
    const timer = setTimeout(() =>{
      if(!searchCache[searchInput]){
        getSearchSuggestion()
      }
      else{
        setSearchSuggestions(searchCache[searchInput]);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const handleShowMenu = () => {
    dispatch(toggleMenuList());
  };
  return (
    <div>
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
          <input
            onFocus={() => {if(searchInput)setShowSearchSuggestion(true)}}
            onBlur={() => setShowSearchSuggestion(false)}
            className="border border-gray-300 w-[70%] p-2 rounded-l-full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button className="border border-gray-300 p-2 rounded-r-full px-4 bg-gray-100 hover:bg-gray-200 cursor-pointer ">
            Search
          </button>
          {showSearchSuggestion && (
            <div className="text-black bg-white absolute p-2  w-130 shadow-2xl rounded-lg h-auto mr-6 ">
              <ul>
                {searchSuggestions.map(
                  (s, index) =>
                    s !== "k" && (
                      <li className="p-2 flex " key={index}>
                        <img
                          className="h-4 mr-2 mt-1 pt-1"
                          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                          alt=""
                        />
                        {s}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>

        <div>
          <img
            alt="user-icon"
            src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
            className="h-8 mr-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
