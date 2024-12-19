import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ButtonChange = () => {
    var[x, setx] = useState()
    const inpt1 = () => {
        setx("React")
    }
    const inpt2 = () => [
        setx("Angular")
    ]
    const inpt3 = () => {
        setx("Vue")
    }
    useEffect(() => {
        inpt1()
    },[])
  return (
      <div>
          <Typography variant="h3">Welcome{x}</Typography><br /><br />

          <Button variant='contained' color='primary' onClick={inpt1}>React</Button> &nbsp;
          <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button> &nbsp;
          <Button variant='contained' color='success' onClick={inpt3}>Veu</Button> &nbsp;
      </div>
  )
}

export default ButtonChange