import React, { useState } from "react";
import Logo from "../../images/Hawks.png";
import "./Sidebarbar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [sidebar, openSidebar] = useState(false);
  const handleSideBar = (sidebar) => {
    openSidebar(!sidebar);
  };
  const location = useLocation().pathname;
  return (
    <div className="">
      <div
        class={`open-container ${sidebar ? "d-none":''}`}
        onClick={() => handleSideBar(sidebar)}
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div className={`sidebar ${sidebar ? "show":""}`}>
        <div
          class={` ${sidebar ? "change":""} close-container`}
          onClick={() => handleSideBar(sidebar)}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div>
          <img src={Logo} alt="LOGO" />
        </div>
        <Link to="/" className={location === "/" ? "active" : ""}>
          <svg
            width="30"
            height="48"
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_30_104)">
              <path
                d="M1.53394 23.9766C1.53394 24.8203 2.23579 25.4813 3.03121 25.4813H4.52848L4.49572 32.9906C4.49572 33.1172 4.50508 33.2437 4.51912 33.3703V34.125C4.51912 35.1609 5.35665 36 6.3907 36H7.13934C7.19081 36 7.24228 36 7.29374 35.9953C7.35925 36 7.42476 36 7.49026 36H9.01092H10.1339C11.1679 36 12.0055 35.1609 12.0055 34.125V33V30C12.0055 29.1703 12.6745 28.5 13.5027 28.5H16.4973C17.3254 28.5 17.9945 29.1703 17.9945 30V33V34.125C17.9945 35.1609 18.8321 36 19.8661 36H20.9891H22.4817C22.5518 36 22.622 35.9953 22.6922 35.9906C22.7484 35.9953 22.8045 36 22.8606 36H23.6093C24.6433 36 25.4809 35.1609 25.4809 34.125V28.875C25.4809 28.8328 25.4809 28.7859 25.4762 28.7438V25.4813H26.9781C27.8203 25.4813 28.4754 24.825 28.4754 23.9766C28.4754 23.5547 28.335 23.1797 28.0075 22.8516L16.0106 12.375C15.6831 12.0469 15.3088 12 14.9813 12C14.6538 12 14.2794 12.0938 13.9987 12.3281L2.04863 22.8516C1.67431 23.1797 1.48715 23.5547 1.53394 23.9766Z"
                fill="white"
                fillOpacity="0.87"
              />
            </g>
            <defs>
              <clipPath id="clip0_30_104">
                <rect
                  width="26.9508"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 1 28.4754 12)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Home</span>
        </Link>
        <Link to="/about" className={location === "/about" ? "active" : ""}>
          <svg
            width="30"
            height="48"
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_30_109)">
              <path
                d="M4.5 13.5C2.84531 13.5 1.5 14.8453 1.5 16.5V31.5C1.5 33.1547 2.84531 34.5 4.5 34.5H25.5C27.1547 34.5 28.5 33.1547 28.5 31.5V16.5C28.5 14.8453 27.1547 13.5 25.5 13.5H4.5ZM8.25 25.5H11.25C13.3219 25.5 15 27.1781 15 29.25C15 29.6625 14.6625 30 14.25 30H5.25C4.8375 30 4.5 29.6625 4.5 29.25C4.5 27.1781 6.17812 25.5 8.25 25.5ZM6.75 21C6.75 20.2044 7.06607 19.4413 7.62868 18.8787C8.19129 18.3161 8.95435 18 9.75 18C10.5456 18 11.3087 18.3161 11.8713 18.8787C12.4339 19.4413 12.75 20.2044 12.75 21C12.75 21.7956 12.4339 22.5587 11.8713 23.1213C11.3087 23.6839 10.5456 24 9.75 24C8.95435 24 8.19129 23.6839 7.62868 23.1213C7.06607 22.5587 6.75 21.7956 6.75 21ZM18.75 19.5H24.75C25.1625 19.5 25.5 19.8375 25.5 20.25C25.5 20.6625 25.1625 21 24.75 21H18.75C18.3375 21 18 20.6625 18 20.25C18 19.8375 18.3375 19.5 18.75 19.5ZM18.75 22.5H24.75C25.1625 22.5 25.5 22.8375 25.5 23.25C25.5 23.6625 25.1625 24 24.75 24H18.75C18.3375 24 18 23.6625 18 23.25C18 22.8375 18.3375 22.5 18.75 22.5ZM18.75 25.5H24.75C25.1625 25.5 25.5 25.8375 25.5 26.25C25.5 26.6625 25.1625 27 24.75 27H18.75C18.3375 27 18 26.6625 18 26.25C18 25.8375 18.3375 25.5 18.75 25.5Z"
                fill="white"
                fillOpacity="0.65"
              />
            </g>
            <defs>
              <clipPath id="clip0_30_109">
                <rect
                  width="27"
                  height="24"
                  fill="white"
                  transform="translate(1.5 12)"
                />
              </clipPath>
            </defs>
          </svg>

          <span>About</span>
        </Link>
        <Link to="/work" className={location === "/work" ? "active" : ""}>
          <svg
            width="30"
            height="48"
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.625 14.25H18.375C18.5813 14.25 18.75 14.4188 18.75 14.625V16.5H11.25V14.625C11.25 14.4188 11.4187 14.25 11.625 14.25ZM9 14.625V16.5H6C4.34531 16.5 3 17.8453 3 19.5V24H12H18H27V19.5C27 17.8453 25.6547 16.5 24 16.5H21V14.625C21 13.1766 19.8234 12 18.375 12H11.625C10.1766 12 9 13.1766 9 14.625ZM27 25.5H18V27C18 27.8297 17.3297 28.5 16.5 28.5H13.5C12.6703 28.5 12 27.8297 12 27V25.5H3V31.5C3 33.1547 4.34531 34.5 6 34.5H24C25.6547 34.5 27 33.1547 27 31.5V25.5Z"
              fill="white"
              fillOpacity="0.65"
            />
          </svg>

          <span>Work</span>
        </Link>
      </div>
      <div className="ml-240">{children}</div>
    </div>
  );
};

export default Sidebar;
