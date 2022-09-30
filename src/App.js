import React from "react";
import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Manager from "./components/Manager/Manager";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      <div className={classes.container}>
        <Manager />
      </div>
    </React.Fragment>
  );
};

export default App;
