import React, { useState } from "react";
import axios from "axios";

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:8080/videos/upload", formData);
      alert("Video uploaded successfully");
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Failed to upload video");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="text-white text-center">
            <h2>Upload <span className="text-danger">Video</span></h2>
          </div>
          <div>
            <h3 className="text-white">Titile</h3>
            <input type="text" className="form-control bg-transparent text-white" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <h3 className="text-white">Description</h3>
            <textarea className="form-control bg-transparent text-white" value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>
          </div>
          <div>
            <h3 className="text-white">Video</h3>
            <input type="file" className="form-control bg-transparent text-white" onChange={handleFileChange} required />
          </div>
          <div>
            <h3 className="text-white">Add Thumbnail</h3>
            <input type="file" className="form-control bg-transparent text-white" onChange={handleImageChange} required />
          </div>
          <div className="">
            <button type="submit" className="btn btn-outline-light mt-1">Upload Video</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UploadVideo;
