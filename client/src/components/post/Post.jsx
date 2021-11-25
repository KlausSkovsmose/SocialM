import React from 'react'
import { MoreVert, ThumbUpAltOutlined, FavoriteBorderOutlined } from '@material-ui/icons'

import './post.css'

const Post = () => {
    return (
        <div className="post" >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/ph.png" alt=""  />
                        <span className="postUsername">Klaus</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post</span>
                    <img className="postImg" src="/assets/ph.png" alt=""  />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAltOutlined htmlColor="#1877f2" className="likeIcon"/>
                        <FavoriteBorderOutlined htmlColor="red" className="likeIcon"/>
                        <span className="postLikeCounter">32 people likes this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
