import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.navigation}>
      <div className={classes.branding}>
        <h3>IPTables Management</h3>
      </div>
    </header>
  );
};

export default Header;
