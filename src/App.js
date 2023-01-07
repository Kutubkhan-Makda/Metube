import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/system';
import './App.css';
import Navbar from './Components/Navbar';
import VideoDetail from './Components/VideoDetail';
import ChannelDetail from './Components/ChannelDetail';
import SearchFeed from './Components/SearchFeed';
import Feed from './Components/Feed';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/Metube' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/Channel/:id' element={<ChannelDetail/>}/>
          <Route path='/Search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
