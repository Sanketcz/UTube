import React from 'react'
import VideoStream from './VideoStream'
import { useLocation } from 'react-router-dom';

function Showvideo() {

    const location = useLocation();
    const { video } = location.state || {}; // Destructure video data from the passed state

    if (!video) {
        return <h2>No video selected</h2>; // Handle case if no video is passed
    }

    const videoId = Number(video.id)

    return (
        <div >
            <div className='row m-0'>
                <div className='col-md-8'>
                    <h3 className='text-white'>{video.title}</h3>
                    <div className=''>
                        <VideoStream id={videoId} />
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default Showvideo