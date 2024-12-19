import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setfname] = useState("Dheeraj")
    var [val, setval] = useState()


    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
        
    }
    const submitevent =()=>{
        setval(fname)
    
    }
    

    
    
    
    
  return (
      <div>
          <Typography variant='h6'>welocome {val}
              <br /><br />
          </Typography>
          <TextField variant='outlined' label="enter name" onChange={handleinput} />
          <Button varient="contained" onClick={submitevent}>submit</Button>
          
          
      </div>
  )
}

export default StateBasics