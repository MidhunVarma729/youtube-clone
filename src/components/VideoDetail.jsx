import React from 'react'
import {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import {CheckCircle } from '@mui/icons-material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { demoChannelTitle, demoVideoUrl, demoChannelUrl} from '../utils/constants';

const VideoDetail = () => {
  const {id, vid, pgNo} = useParams();
  const [curVideoDetail, setVideoDetail] = useState(null);

  useEffect(()=>{
    fetchFromAPI(pgNo).then((d)=>setVideoDetail(d.posts[vid]))
  }, [id])


console.log(curVideoDetail)
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md:'row'}}>ś
        <Box flex={1}>
          <Box sx={{ width:'100%', position:'sticky', top:'86px'}}>
          {/* React player code... */}
            {curVideoDetail !== null && <ReactPlayer url={curVideoDetail.submission.mediaUrl} 
              className="react-player"
              controls
            /> }

          {/* Video Title... */}
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
            {curVideoDetail !== null && curVideoDetail.submission.title}
            </Typography>

          {/* Channel Details... and reactions */}

              <Stack direction="row" justifyContent="space-between" sx={{
                color: '#fff'
              }} py={1} px={2}>
                <Link to={curVideoDetail !== null && curVideoDetail.creator.id?`/channel/${curVideoDetail.creator.id}`: demoChannelUrl}>
                <Typography variant={{ sm:'subtitle1', md:'h5'}} color="#fff">
                  {curVideoDetail !== null? curVideoDetail.creator.handle: demoChannelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px' }} />
                </Typography>
                </Link>

                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{opacity: 0.7, color:"#fff"}}>
                    <AddReactionIcon sx={{color:(curVideoDetail !== null && curVideoDetail.reaction.voted?'blue':'white'), width:'30px'}}/> {curVideoDetail !== null && parseInt(curVideoDetail.reaction.count).toLocaleString()} reactions
                  </Typography>
                </Stack>
              </Stack>
            
              <Stack direction="column" justifyContent="space-around" sc={{
                color:'#fff'
              }} py={2} px={2}>
          {/* Description... */}
              <Typography variant='h6' color="#fff">
              Video Description
              </Typography>
              <Typography variant='body2' sx={{opacity: 0.7, color:"#fff", pb:'10px'}}>
              {curVideoDetail !== null && curVideoDetail.submission.description}
              </Typography>
              
          {/* Comment section... */}

                <Typography variant='h6' color="#fff">
                  {curVideoDetail !== null && !curVideoDetail.comment.commentingAllowed?<span>Comment Section turned <span style={{color:"blue"}}>off</span></span>: <span>Comments: { curVideoDetail !== null && curVideoDetail.comment.count}</span>}
                </Typography> 
              </Stack>

          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail