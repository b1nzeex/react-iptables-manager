import classes from "./ActionsCard.module.css";

const ActionsCard = () => {
  const running = true;

  const serviceRunningCSS = running
    ? `${classes.serviceBanner} ${classes.serviceRunning}`
    : `${classes.serviceBanner} ${classes.serviceStopped}`;

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h3>Actions</h3>
      </div>

      <div className={serviceRunningCSS}>
        <p>The IPTables service {running ? "is running" : "has stopped"}</p>
      </div>

      <div className={classes.cardBody}>
        <label className={classes.label}>Manual Command Execution</label>
        <input
          type="text"
          className={classes.input}
          placeholder="ex. iptables -A INPUT -s 127.0.0.1 -j DROP"
        />

        <div className={classes.actions}>
          <button className={classes.btnSuccess}>START</button>
          <button className={classes.btnPrimary}>RESTART</button>
          <button className={classes.btnDanger}>STOP</button>
          <button className={classes.btnPrimary}>EXEC</button>
        </div>
      </div>
    </div>
  );
};

export default ActionsCard;
