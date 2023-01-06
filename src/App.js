import { useState } from "react";

import CreateRect from "./components/CreateRect";
import Tooltip from "./components/Tooltip";

import "./App.css";

function App() {
  const people = [
    { id: 1, name: "Белов Даниил  ", date: "24.07.2001" },
    { id: 2, name: "Артём Пупкин  ", date: "21.09.2000" },
  ];

  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");

  function show(event) {
    people.forEach((item) => {
      if (item.id === +event.target.id) {
        setName((name) => item.name);
      }
    });
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function position(event) {
    setX((x) => event.pageX + 20);
    setY((y) => event.pageY - 20);
  }

  return (
    <div className="map">
      <CreateRect mouseMove={position} mouseEnter={show} mouseLeave={hide} />
      <Tooltip x={x} y={y} visible={visible} name={name} />
    </div>
  );
}

export default App;
