import React, { useEffect, useState } from "react";
import axios from "axios";

function VideoStream({ videoId }) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos/1`, { responseType: "blob" })
      .then((response) => {
        const url = URL.createObjectURL(new Blob([response.data]));
        setVideoUrl(url);
      })
      .catch((error) => console.error("Error fetching video:", error));
  }, [videoId]);

  return videoUrl ? (
    <video width="600" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <p>Loading video...</p>
  );
}

export default VideoStream;
