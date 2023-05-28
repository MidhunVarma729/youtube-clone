import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMed, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoTitle, demoChannelTitle, demoVideoUrl, demoChannelUrl } from '../utils/constants';


const VideoCard = ({video, vid}) => {
var videoID = video.postId;
var videoTitle = video.submission.title;
var videoThumbnail = video.submission.thumbnail;
var channel = video.creator;
  return (
    <Card sx={{width: {md: '320px', xs:'100%'}, boxShadow:'none', borderRadius:0}}>
        <Link to={videoID?`/video/${videoID}/${vid}`: demoVideoUrl}>
            <CardMedia 
                image={videoThumbnail}
                alt="title"
                sx={{width: 358, height: 180}}
            />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
            <Link to={videoID?`/video/${videoID}`: demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {videoTitle.slice(0, 60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={channel.id?`/channel/${channel.id}`: demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {channel.handle || demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
                </Typography>
            </Link>

        </CardContent>
    </Card>
  )
}

export default VideoCard