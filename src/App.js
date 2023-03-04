import { Box } from "@mui/material";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import Sidebar from "./component/Sidebar";
import { Stack } from "@mui/system";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Box>
      <Stack direction="row" spacing={3}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
    </>
  );
}

export default App;
