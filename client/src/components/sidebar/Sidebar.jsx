import React from "react";
import { Chat, RssFeed, YouTube, Event, Group } from "@material-ui/icons";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <YouTube className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/ph.png" alt="" />
                <span className="sidebarFriendName">Ajes</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
