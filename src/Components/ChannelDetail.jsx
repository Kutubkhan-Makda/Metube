import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../Utils/FetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const {id} = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data.items[0]));
    FetchFromAPI(`search?channelID=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,121,1) 50%, rgba(0,212,255,1) 100%)',zIndex:10,height:'300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'118px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail