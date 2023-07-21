import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });
  // handle formats
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack p={12}>
      <Stack spacing={3} direction="row">
        <Button variant="text" color="warning">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} mt={4} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Waring
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" mt={4} spacing={2} direction="row">
        <Button variant="contained" size="small" color="primary">
          Small
        </Button>
        <Button variant="contained" size="medium" color="warning">
          Medium
        </Button>
        <Button variant="contained" size="large" color="success">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" mt={4}>
        <Button variant="contained" disableRipple startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          onClick={() => alert("clicked")}
          variant="contained"
          disableElevation
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" mt={4}>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row" mt={4}>
        <ButtonGroup
          variant="text"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button>Top</Button>
          <Button>Center</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </Stack>

      {/* toggle button  */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          orientation="vertical"
          color="success"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
