import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import HomeRightbar from "../../components/rightbar/HomeRightBar";

import './home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <HomeRightbar/>
      </div>
    </>
  );
};

export default Home;
