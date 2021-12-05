import React, { useState, useEffect } from "react";
import {
  MoreVert,
  ThumbUpAltOutlined,
  FavoriteBorderOutlined,
  ThumbUp,
} from "@material-ui/icons";
import axios from "axios"
import { format } from "timeago.js"

import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data)
    };
    fetchUser();
  }, []);

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
              src={user.profilePicture || PF+"ph.png"}
              alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
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
