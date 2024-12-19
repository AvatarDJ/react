import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}>
                      
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      News
                  </Typography>
                  <Link to='/login'>
                      <Button color="inherit">Login
                      </Button>
                  </Link>
                  <Link to='/signup'>
                      <Button color="inherit">Signup
                      </Button>
                  </Link>
                      <Link to='/state'>
                          <Button color="inherit">StateBasics
                          </Button>
                  </Link>
              
                  <Link to='/b'>
                  <Button color="inherit">ButtonChange
                  </Button></Link> 
                      
                    
                      <Link to='/a'>
                          <Button color="inherit">Api
                          </Button>
                  </Link>
                  <Link to='/p'>
                      <Button color="inherit">Pokemon
                      </Button>
                  </Link>
                  <AppBar /><div />
                  
                      
                      

                      
                  
                  
                 
                  

                  
                  
                  
              </Toolbar>
          </AppBar>
          
    </div>
  )
}

export default NavBar