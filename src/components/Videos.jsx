import React from 'react';
import {Stack, Box} from '@mui/material';
import { VideoCard } from './';


const Videos = (props) => {
  
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {props.videos.map((item, idx) =>(
        <Box key={idx}>
        <VideoCard video={item} vid={idx}/>
        </Box>
      ))}
    </Stack>
  )
}

export default Videos