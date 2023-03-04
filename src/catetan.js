import * as React from "react";
import { Button, Typography, styled } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function catetan() {
  const ButtonTest = styled(Button) (({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    margin: 5,
    "&:hover": { backgroundColor: theme.palette.secondary },
     variant: "contained",
  }));

  return (
    <div>
      <Button variant="inlined">Hello World</Button>
      <Button startIcon={<SettingsOutlinedIcon />} variant="contained">
        Settings
      </Button>
      <Button variant="outlined">Hello World</Button>
      <Button variant="outlined" color="secondary">test</Button>
      <Button variant="outlined" color="otherColor">Hello World</Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": { backgroundColor: "yellow" },
        }}
      >
        My Unique Button
      </Button>
      <ButtonTest>test</ButtonTest>
    </div>
  );
}


export default catetan;