import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';
import About from './Layout/About';
import UploadVideo from './Layout/UploadVideo';
import VideoStream from './Layout/VideoStream';
import Showvideo from './Layout/Showvideo';
function App() {
  return (
    <div className="App vh-100">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/uploadVideo' element={<UploadVideo />}/>
          <Route exact path='/video/:id' element={<Showvideo />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
