import React, { useState } from "react";
import classNames from "classnames";

import "./Tooltip.css";

export type TooltipPositionType = ["top" | "right" | "bottom" | "left"];

interface TooltipProps {
  children: React.ReactNode;
  content: JSX.Element;
  position: TooltipPositionType;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position }) => {
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };

  const classes = classNames("tooltip", position);
  return (
    <span className="tooltipWrapper">
      {visible && <div className={classes}>{content}</div>}

      <span className="targetElement" onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
