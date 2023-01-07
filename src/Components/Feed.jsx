import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../Utils/FetchFromAPI'
import SideBar from './SideBar'
import Videos from './Videos'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'90vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          CopyRight 2022 KHAN Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'85vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed