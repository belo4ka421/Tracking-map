import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

import Tooltip from "./Tooltip";
import Modal from "./Modal";

import "./css/CreateRect.css";

function CreateRect() {
  const [rects, setRects] = useState([]);

  useEffect(() => {
    getDataRect();
  }, []);

  async function getDataRect() {
    await axios
      .get("./rects.json")
      .then((rect) => {
        setRects(rect.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    getDataPerson();
  }, []);

  async function getDataPerson() {
    await axios
      .get("./peoples.json")
      .then((person) => {
        setPeoples(person.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const [tooltipName, setTooltipName] = useState("");
  const [tooltipImg, setTooltipImg] = useState("");

  function showTooltip(event) {
    peoples.forEach((item) => {
      if (item.id === +event.target.id) {
        setTooltipName((tooltipName) => item.name);
        if (item.name === "" || item.name === undefined) {
          setTooltipName((tooltipName) => "Здесь может быть ваше место");
        }
        if (item.imgUrl) {
          setTooltipImg((tooltipImg) => item.imgUrl);
        } else {
          setTooltipImg((tooltipImg) => "./logo/anonim.jpg");
        }
      }
    });
    setTooltipVisible(true);
  }

  function hideTooltip() {
    setTooltipVisible(false);
  }

  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

  function tooltipPosition(event) {
    setTooltipX((tooltipX) => event.pageX + 20);
    setTooltipY((tooltipY) => event.pageY);
  }

  const [modalVisible, setModalVisible] = useState(false);

  const [modalName, setModalName] = useState("");
  const [modalMail, setModalMail] = useState("");
  const [modalImg, setModalImg] = useState("");
  const [placeNumber, setPlaseNumber] = useState("");

  const [modalX, setmodalX] = useState(0);
  const [modalY, setmodalY] = useState(0);

  function showModal(event) {
    setmodalX((modalX) => event.pageX + 50);
    setmodalY((modalY) => event.pageY);
    peoples.forEach((item) => {
      if (item.id === +event.target.id) {
        setModalName((modalName) => item.name);
        setModalMail((modalMail) => item.mail);
        setPlaseNumber((placeNumber) => item.id);
        if (item.name === "" || item.name === undefined) {
          setModalName((ModalName) => "Но это не точно");
        }
        if (item.imgUrl) {
          setModalImg((modalImg) => item.imgUrl);
        } else {
          setModalImg((modalImg) => "./logo/anonim.jpg");
        }
      }
    });
    setModalVisible(true);
  }

  function hideModal(event) {
    setModalVisible(false);
  }

  return (
    <div>
      <svg viewBox="0 0 297 210">
        {rects.map((obj) => (
          <rect
            onMouseMove={tooltipPosition}
            onMouseLeave={hideTooltip}
            onMouseEnter={showTooltip}
            onClick={showModal}
            id={obj.id}
            key={obj.id}
            width={obj.width}
            height={obj.height}
            x={obj.x}
            y={obj.y}
            fill={obj.fill}
          ></rect>
        ))}
      </svg>
      <img alt="map" src="./logo/map.svg"></img>
      <Tooltip
        x={tooltipX}
        y={tooltipY}
        visible={tooltipVisible}
        name={tooltipName}
        img={tooltipImg}
      />
      <Modal
        x={modalX}
        y={modalY}
        hideModal={hideModal}
        visible={modalVisible}
        name={modalName}
        mail={modalMail}
        img={modalImg}
        number={placeNumber}
      />
    </div>
  );
}
export default CreateRect;
