import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Pokemon = () => {
    var [user,setuser] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then((response)=> {
            console.log(response.data)
            setuser(response.data)
        })
    return (
        <div>
            <Grid container spacing={2}>
                {user.map((val) => {
                    return (
                    <Grid item xs={8}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={val.image_url}
                                title="green iguana"
                                />
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.pokemon}
                                />
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.type}
                                />
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.abilities}
                                />
                                
                            <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.pokemon}
                                
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    )
                })}
                </Grid>


        </div>
            
        
     
            
  )
}


export default Pokemon