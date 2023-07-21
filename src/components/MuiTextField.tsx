import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
    const [value,setValue] = useState('');
  return (
    <Stack spacing={4}>
      // variant in input field------------------
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      // size and color ------------------
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
        ></TextField>
        <TextField
          label="Medium Success"
          size="medium"
          color="success"
        ></TextField>
      </Stack>
      // required , type , helperText , readOnly--------
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input"  required></TextField>
        <TextField
          label="Password"
          type="password"
          required
          value={value} onChange={(e)=>setValue(e.target.value)}
          error={!value}
          helperText={!value?"required":'Do not share you password with anyone'}
        ></TextField>
        <TextField
          label="Read Only"
          inputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      // Adornments------------ :TODO
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          inputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Weight"
          inputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
