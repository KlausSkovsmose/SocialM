import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Social Mediaaa</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <span className="navbarLink">Homepage</span>
        <span className="navbarLink">Timeline</span>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/" alt="" className="navbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
