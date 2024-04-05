"use client";
import React, { useState, useEffect } from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";
import Toast from "../_components/Toast";
import Footer from "../_components/Footer";

function Layout({ children }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".side-nav")) return;
      setToggle(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className="h-full w-64 flex-col 
        fixed inset-y-0 z-30 md:flex hidden bg-white"
        >
          <SideNav closeSideBar={() => setToggle(false)} />
        </div>

        {toggle ? (
          <div
            className="h-full w-64 flex-col 
        fixed inset-y-0 z-30 bg-white flex"
          >
            <SideNav closeSideBar={() => setToggle(false)} />
          </div>
        ) : null}

        <div className="md:ml-64">
          <TopHeader setToggleBar={() => setToggle(true)} />
          {children}
          {/* <Toast/> */}
          <div className="">
            <Footer />
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Layout;
