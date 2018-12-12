import React from "react";
import VideoItem from "./VideoItem";
const VideoList = props => {
  const videos = props.videos.map(video => (
    <VideoItem key={video.id.videoId} video={video} />
  ));
  return <div className="video-list">{videos}</div>;
};
export default VideoList;
