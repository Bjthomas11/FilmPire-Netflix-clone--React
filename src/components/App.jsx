import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import useStyles from "./styles";
import {
  ActorsDetail,
  Movies,
  Nav,
  ProfileDetail,
  MovieInformation
} from "./index.js";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id" component={MovieInformation} />
          <Route exact path="/actors/:id" component={ActorsDetail} />
          <Route exact path={["/", "/approved"]} component={Movies} />

          <Route exact path="/profile/:id" component={ProfileDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
