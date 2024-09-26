import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Thumbnail from './Thumbnail';

function Home() {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    loadUsers();

  }, []);

  const navigate = useNavigate();



  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/videos/getAllVideos")

    setVideos(result.data)
  }

  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };

  const mainDiv = {
    height: "40vh"
  }

  return (
    <>
      <div className='row m-0'>
        <div className='col-md-3 border-end'>

        </div>
        <div className='col-md-9'>
          <div>
            {
              videos.map((videos) => (
                <div className='container' key={videos.id} onClick={() => handleVideoClick(videos)}>
                  <div className='mt-1' style={mainDiv}>
                    <div className='row m-0 h-100'>
                      <div className='col-5 p-0'>
                        <Thumbnail id={videos.id} />
                      </div>
                      <div className='col-7'>
                        <h3 className='text-white'>{videos.title}</h3>
                        <h5 className='text-white'>{videos.description}</h5>

                      </div>
                    </div>
                  </div>
                </div>

              ))

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home