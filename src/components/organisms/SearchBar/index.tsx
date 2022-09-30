import React from 'react'
import { TextField } from '@mui/material'

interface SearchBarProps {
  handleChange : ()=> void;
  placeholderText : string
}

const Searchbar = (props: SearchBarProps) => {
const{handleChange, placeholderText} = props;
  return (
    <div>
      <TextField placeholder={placeholderText} onChange={handleChange}/>
    </div>
  )
}

export default Searchbar
