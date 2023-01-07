import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../Utils/FetchFromAPI'
import Videos from './Videos'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[]);

  return (
    <Box p={2} sx={{overflowY:'auto',height:'85vh',flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
        Search result for <span style={{color:'#F31503'}}>{searchTerm}</span>
      </Typography>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'110px'}}}/>
        <Videos videos={videos}/>
      </Box>
  </Box>
  )
}

export default SearchFeed