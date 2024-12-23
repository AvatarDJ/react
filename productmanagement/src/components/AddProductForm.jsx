import { Button, TextField } from '@mui/material'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


function AddProductForm() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
  return (
    <div><h1>Add New Product</h1>
      <TextField  label="Title" variant="outlined" /><br /><br /><br />
      
      <TextField  label="Price" variant="outlined" /><br /><br /><br />
      <TextField  label="Category" variant="outlined" /><br /><br /><br />
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
    </div>
  )
}

export default AddProductForm
