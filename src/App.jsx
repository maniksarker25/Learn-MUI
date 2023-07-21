import { Stack } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import TestTypography from "./components/TestTypography";
import MuiSelect from "./components/MuiSelect";



const App = () => {
  return (
    <Stack p={10} >
      {/* <TestTypography></TestTypography> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      <MuiSelect/>
    </Stack>
  );
};

export default App;
