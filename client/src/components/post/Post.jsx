import React, { useState } from "react";
import {
  MoreVert,
  ThumbUpAltOutlined,
  FavoriteBorderOutlined,
  ThumbUp,
} from "@material-ui/icons";
import { Users } from "../../dummyData";

import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
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
          <img className="postImg" src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {isLiked ? (
              <ThumbUp
                onClick={likeHandler}
                htmlColor="#1877f2"
                className="likeIcon"
              />
            ) : (
              <ThumbUpAltOutlined
                onClick={likeHandler}
                htmlColor="#1877f2"
                className="likeIcon"
              />
            )}

            {/* <FavoriteBorderOutlined onClick={likeHandler} htmlColor="red" className="likeIcon" /> */}
            <span className="postLikeCounter">{like}</span>
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
