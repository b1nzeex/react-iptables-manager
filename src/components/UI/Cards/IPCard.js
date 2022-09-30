import classes from "./IPCard.module.css";

const IPCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h3>IP / Port Management</h3>
      </div>

      <div className={classes.cardBody}>
        <label className={classes.label}>IP or IP Range</label>
        <input
          type="text"
          className={classes.input}
          placeholder="ex. 127.0.0.1 OR 127.0.0.0/8"
        />

        <label className={classes.label}>Port</label>
        <input type="text" className={classes.input} placeholder="ex. 63355" />

        <div className={classes.actions}>
          <button className={classes.btnSuccess}>ALLOW</button>
          <button className={classes.btnDanger}>DROP</button>
          <button className={classes.btnDanger}>REJECT</button>
        </div>
      </div>
    </div>
  );
};

export default IPCard;
