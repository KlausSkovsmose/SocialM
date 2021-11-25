import React from "react";
import {
  MoreVert,
  ThumbUpAltOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { Users } from "../../dummyData";

import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAltOutlined htmlColor="#1877f2" className="likeIcon" />
            <FavoriteBorderOutlined htmlColor="red" className="likeIcon" />
            <span className="postLikeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
