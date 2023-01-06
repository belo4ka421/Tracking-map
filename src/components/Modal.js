import React from "react";

import "./css/Modal.css";

function Modal({ x, y, visible, name, mail, img, number, hideModal }) {
  return (
    <div>
      {visible && (
        <div className="modal__content" style={{ left: x, top: y }}>
          <div className="modal__name">{name}</div>
          <img className="modal__img" src={img} />
          <div className="modal__mail">{mail}</div>
          <div className="modal__number"> Номер места: {number}</div>
          <div className="modal__close">
            <button onClick={hideModal} className="modal__close-btn">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
