import {React, useEffect} from 'react';
import {Button, Fab } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ButtonMap = (props) => { 
    function renderFeed(){
        fetchFromAPI(props.buttonId).then((d) => props.changePage(d.posts))
        props.CPN(props.buttonId)
    }

    return (
        <Fab onClick={renderFeed} sx={{color:'red', m:'3px'}} size="small">{props.buttonId + 1}</Fab>
    )
}

export default ButtonMap