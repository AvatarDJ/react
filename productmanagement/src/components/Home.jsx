import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [user, setUser] = useState([]);  

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setUser(response.data);  
      })
      .catch((error) => {
        console.error("Error fetching data", error);  
      });
  }, []);  
  return (
    <div>
      <Grid container spacing={2}>
        {user.map((val) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={val.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{
                    height: 200,       
                    backgroundSize: 'cover', 
                    objectFit: 'cover', 
                    backgroundImage: `url(${val.image})`, 
                  }}
                  title={val.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    ${val.price} 
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {val.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;