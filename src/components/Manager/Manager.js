import React from "react";
import IPCard from "../UI/Cards/IPCard";
import ActionsCard from "../UI/Cards/ActionsCard";
import classes from "./Manager.module.css";

const Manager = () => {
  return (
    <React.Fragment>
      <div className={classes.row}>
        <ActionsCard />
        <IPCard />
      </div>
    </React.Fragment>
  );
};

export default Manager;
