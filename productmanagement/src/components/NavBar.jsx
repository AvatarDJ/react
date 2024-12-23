import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
  return (
      <div className="navbar-container"> 
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}>
                        <MenuIcon />
                  </IconButton>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className="navbar-title">
                      Shopping
                  </Typography>
                  <Link to='/add' className="navbar-link">
                      <Button color="inherit">Add Product</Button>
                  </Link>
                  <Link to='/' className="navbar-link">
                      <Button color="inherit">Home</Button>
                  </Link>
              </Toolbar>
          </AppBar>
      </div>
  )
}

export default NavBar
