import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videoList, onVideoSelect}) => {
    

        const videoListItems = videoList.map(video => {
            return <VideoItem key={video.id.videoId} videoDetails={video} onVideoSelect={onVideoSelect}></VideoItem>
        })
        return(
            <div className="ui relaxed divided list"> 
                {videoListItems}
            </div>
        );
    }

export default VideoList;