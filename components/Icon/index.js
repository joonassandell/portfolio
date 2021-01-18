import React from "react";
import c from "classnames";
import ArrowDownIcon from "../../public/icons/arrow-down.svg";

const ArrowDown = (props) => (
  <div className={c("Icon Icon--arrowDown", props.className)}>
    <div className="Icon-inner">
      <div className="Icon-icon">
        <ArrowDownIcon />
      </div>
    </div>
  </div>
);

export { ArrowDown };
