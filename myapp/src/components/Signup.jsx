import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div><h1>Signup page</h1>
          <Button variant="contained" color="success">
              Signup </Button>
          <TextField id="standard-basic" label="Standard" variant="standard"/>
          
      </div>
  )
}

export default Signup