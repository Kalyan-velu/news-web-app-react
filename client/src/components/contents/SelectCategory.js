import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { country } from '../api/categories';

export default function BasicSelect({countryName,handleChange}) {
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={countryName}
          label="Country"
          onChange={handleChange}
        >
         {country.map((item)=>(
            <MenuItem key={item._id} value={item.short}>{item.name}</MenuItem>
         )
         )}
          
        </Select>
      </FormControl>
    </Box>
  );
}