import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from "react-toastify";

import Home from './components/Home/Home';
import NavBar from './components/NavBar/Navbar';
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#115293'
    },
    secondary: {
      main: '#ff4081'
    }
  }
});

function App() {

  return (
    <React.Fragment>
      <>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <ToastContainer />
          <Switch>
            <Route exact path="/">
              <NavBar />
              <Home />
            </Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </MuiThemeProvider>
      </>

    </React.Fragment>
  );
}

export default App;