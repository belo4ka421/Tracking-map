import React from "react";
import { useState } from "react";
import "./Modal.css";

interface TooltipProps {
  children: React.ReactNode;
  content: JSX.Element;
}

const Modal: React.FC<TooltipProps> = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div>
      {visible && (
        <div onClick={hide} className="modal">
          <div
            onClick={(event) => event.stopPropagation()}
            className="modal__content"
          >
            {content}
          </div>
        </div>
      )}
      <span onClick={show}>{children}</span>
    </div>
  );
};

export default Modal;
