import React from "react";
import c from "classnames";
import ArrowDownIcon from "../../public/icons/arrow-down.svg";
import ArrowDownIconLong from "../../public/icons/arrow-down-long.svg";
import CrossIcon from "../../public/icons/cross.svg";

const ArrowDown = (props) => (
  <ArrowDownIcon className={c("Icon Icon--arrowDown", props.className)} />
);

const Cross = (props) => (
  <CrossIcon className={c("Icon Icon--cross", props.className)} />
);

const ArrowDownLong = (props) => (
  <div className={c("Icon Icon--arrowDownLong", props.className)}>
    <div className="Icon-inner">
      <div className="Icon-icon">
        <ArrowDownIconLong />
      </div>
    </div>
  </div>
);

export { ArrowDown, ArrowDownLong, Cross };
