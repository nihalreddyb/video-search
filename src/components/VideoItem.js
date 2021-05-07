import React from 'react';
import './VideoItem.css'

const VideoItem = ({videoDetails, onVideoSelect}) => {
        return(
            <div className="video-item item" onClick={() => onVideoSelect(videoDetails)}>
                <img alt={videoDetails.snippet.title} className="ui image" src={videoDetails.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">{videoDetails.snippet.title}</div>
                </div>
            </div>
        );
    }

export default VideoItem;