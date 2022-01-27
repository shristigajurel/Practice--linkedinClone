import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"> #</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/photos/lotus-flower-with-spa-stones-in-rock-garden-picture-id1258114267?k=20&m=1258114267&s=612x612&w=0&h=AQyRSQQJtQ6oniVdQVaw3ZwOuxmH5RQzBC47_ZKpyJY="
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed </p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>views on the post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__botton">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
