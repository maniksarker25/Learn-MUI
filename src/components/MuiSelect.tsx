import { Box,TextField, MenuItem, Stack } from '@mui/material'
import React, { useState } from 'react'

const MuiSelect = () => {
    const [country,setCountry] = useState('');
    const [games,setGames] = useState<string[]>([])
    console.log(country)
    console.log(games)
    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value as string);
    }
    const handleGamesChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        setGames(typeof value === 'string'? value.split(','): value);
    }
  return (
    <Box width='250px'>
      <TextField fullWidth label="Select Country" select value={country} onChange={handleCountryChange} >
        <MenuItem value="BAN">Bangladesh</MenuItem>
        <MenuItem value="IND">India</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
     <Stack mt={4}>
     <TextField size='small' color='success' helperText="Please select you games"  fullWidth label="Select Country" select value={games} onChange={handleGamesChange} SelectProps={{multiple:true}}>
        <MenuItem value="Football">Football</MenuItem>
        <MenuItem value="Cricket">Cricket</MenuItem>
        <MenuItem value="Baseball">Baseball</MenuItem>
      </TextField>
     </Stack>
    </Box>
  )
}

export default MuiSelect
