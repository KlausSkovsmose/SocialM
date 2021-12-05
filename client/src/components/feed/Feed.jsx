import { useState, useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";

import "./feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/61ad25e165121f2422da19bd");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
};

export default Feed;
