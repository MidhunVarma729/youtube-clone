import React from 'react';
import {useState, useEffect} from 'react';

import {Box, Stack, Typography, Button, ButtonGroup } from '@mui/material';
import {Sidebar, Videos, ButtonMap} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const buttonsArray = [0,1,2,3,4,5,6,7,8,9];

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [pgNo, setPageNo] = useState(0);

  useEffect(()=>{
    fetchFromAPI(0).then((d) => setVideos(d.posts))
  }, []);


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 DumbWayToDie
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} pageNumber={pgNo}/>

      <Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
        <ButtonGroup variant="text" aria-label="text button group" sx={{display:"flex", color:"red", justifyContent: "center"}}>
          {buttonsArray.map((num)=>(
              <ButtonMap
                key={num}
                buttonId={num}
                changePage={setVideos}
                CPN={setPageNo}
              />
            ))}
        </ButtonGroup>
      </Box> 

      </Box>
    </Stack>
  );
};
 
export default Feed;