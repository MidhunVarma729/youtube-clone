import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';


import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channel}) => {
  return (
    <Box
        sx={{
            boxShadow: "none",
            borderRadius: '20px',

        }}
    >
    <Link to={`/channel/${channel.id}`}>
        <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent: 'Center', textAlign:'center', color:'#fff'}}>
        <CardMedia 
                image={channel.pic || demoProfilePicture}
                alt="Channel titile"
                sx={{borderRadius: "50%", width: "180px", height: "180", mb:2,border: '1px solid #e3e3e3'}}
            />
        <Typography variant="h6">
            {channel.handle}
            <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
        </Typography>
        </CardContent>
    </Link>
    </Box>
  )
}

export default ChannelCard;