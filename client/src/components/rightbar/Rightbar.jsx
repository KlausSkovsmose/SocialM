import React from "react";
import "./rightbar.css";

import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
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
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Hjørring</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Tolne</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/ph.png" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/ph.png" alt="" />
            <span className="rightbarFollowingName">Ajes Nielsen</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/ph.png" alt="" />
            <span className="rightbarFollowingName">Tea Poulsen</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/ph.png" alt="" />
            <span className="rightbarFollowingName">Marianne Christensen</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/ph.png" alt="" />
            <span className="rightbarFollowingName">Simon Overgaard</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/ph.png" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
