import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function VideoStream(props) {
  const [videoUrl, setVideoUrl] = useState("");
  const videoElement = useRef(null);  
  const videoId = Number(props.id);
  const [startByte, setStartByte] = useState(0); 
  const videoStyle = {
    display: "grid",
    placeContent: "center",
  };

  const fetchVideo = (startByte = 0) => {
    const rangeHeader = `bytes ${startByte}-`;

    axios
      .get(`http://localhost:8080/videos/stream/range/${videoId}`, {
        headers: {
          Range: rangeHeader,
        },
        responseType: "blob",
      })
      .then((response) => {
        const url = URL.createObjectURL(new Blob([response.data]));
        setVideoUrl(url);
      })
      .catch((error) => console.error("Error fetching video:", error));
  };

  useEffect(() => {
    fetchVideo(startByte); 
  }, [videoId]);

  const handleSeeking = () => {
    const currentTime = videoElement.current.currentTime; 
    const duration = videoElement.current.duration; 
    const fileSize = 1000000; 

    const calculatedStartByte = Math.floor((currentTime / duration) * fileSize);
    setStartByte(calculatedStartByte); 
    fetchVideo(calculatedStartByte); 
  };



  return videoUrl ? (
    <div className="bg-black" style={videoStyle}>
      <video height="400" controls autoPlay ref={videoElement} onSeeking={handleSeeking}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <p>Loading video...</p>
  );
}

export default VideoStream;
