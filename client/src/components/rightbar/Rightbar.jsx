import React from "react";
import "./rightbar.css";

import {Users} from "../../dummyData"
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/ph.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ajes</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ph.png" alt="" />

        <div className="onlineFriendsContainer">
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
