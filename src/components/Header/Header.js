import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useHistory, useParams } from "react-router";
import { LogoContainer } from "./HeaderStyles";

function Header() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/")
  }

  const goToTripsListPage = () => {
    history.push("/trips")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LogoContainer href="#" onClick={() => goToHomePage()}>LabeX</LogoContainer>
          </Typography>
          <Button color="inherit" onClick={() => goToHomePage()}>Home</Button>
          <Button color="inherit" onClick={() => goToTripsListPage()}>Viagens</Button>
          <Button color="inherit" onClick={() => goToLoginPage()}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
