import { memo } from "react";

//Css
import classes from "./Spinner.module.css";

const Spinner = ({ isLoading = false }) => {
  return (
    <div
      className={`${
        isLoading ? "visible" : "invisible"
      } flex w-full z-50 justify-center items-center`}
    >
      <div className={classes.cyclical} />
    </div>
  );
};

export default memo(Spinner);
