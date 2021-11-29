import React from "react";
import Router from "./router/Router"
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}
