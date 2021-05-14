import React from "react";
import "../css/Feed.css";
import StoryReel from "../components/StoryReel";
import MessageSender from "../components/MessageSender";
import Post from "../components/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profileSrc="https://images.unsplash.com/photo-1614138159368-242fb95e79e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
        message="Wow this works"
        timestamp="This is the timestamp"
        username="Arsene"
        image="https://images.unsplash.com/photo-1620915098044-1daead60ecae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2014&q=80"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
