import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Thumbnail(props) {

    useEffect(()=>{

        loadImage();

    },[])

    const videoId = Number(props.id)
    const [image, setImage] = useState([]);


    const loadImage = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/videos/image/${videoId}`, {
                responseType: 'blob'
            });
            const imageURL = URL.createObjectURL(result.data); 
            setImage(imageURL);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    }

   

    return (
        <div className='h-100'>
            {image ? <img src={image} className='rounded' style={{height:"40vh"}}  alt={`Thumbnail for video ${videoId}`} /> : "Loading thumbnail..."}
        </div>
    )
}

export default Thumbnail