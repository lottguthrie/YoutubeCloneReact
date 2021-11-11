import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './videoitem'

const VideoList = ({ videos, onVideoSelect }) => {
    const listofVideos = videos.map((video, id) => <VideoItem onVideoSelect={onSelectVideo} key={id} video={video}/>)
    return ( 
        <Grid container spacing={10}>
       {listofVideos}
       </Grid>
        )
}