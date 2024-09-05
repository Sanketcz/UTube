import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Link to={"/"}>Home</Link>||
    <Link to={"/about"}>About</Link>||
    <Link to={"/uploadVideo"}>UploadVid</Link>||
    <Link to={"/videoStream"}>VideoStream</Link>
    </>
  )
}

export default Navbar