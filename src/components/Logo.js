import { memo } from "react";
//Icon
import { Icon } from "./icons";

const Logo = ({
  css = "",
  cssText = "",
  cssContainer = "",
  onClick = () => {},
  cssTextTwo = "",
}) => (
  <div
    className={`${cssContainer} flex justify-center items-center sm:space-x-2`}
    onClick={onClick}
  >
    <Icon
      css={`
        ${css}
      `}
    />

    <span
      className={`${cssText} text-brandRed select-none tracking-wider text-center`}
    >
      Confidence <span className={`${cssTextTwo}`}>Locations</span>
    </span>
  </div>
);

export default memo(Logo);
