import React, { useState } from "react";

const PickShape = ({ setToggleComponent, setJumperAndNeckShape }) => {
  const [jumperShape, setJumperShape] = useState("");
  const [necklineShape, setNecklineShape] = useState("");

  const handlePickJumperShape = (event) => {
    setJumperShape(event.target.value);
  };

  const handlePickNecklineShape = (event) => { 
    setNecklineShape(event.target.value);
  }

  const submitJumperAndNeckShape = () => { 
    setToggleComponent("measurement-entry");
    setJumperAndNeckShape({ neckline: necklineShape, jumper: jumperShape });
  }

  return (
    <div>
      <h3>Pick a Jumper Shape</h3>
      <div>
        <input
          type="radio"
          value="top-down-raglan"
          onChange={handlePickJumperShape}
          name="pick-jumper"
        ></input>
        <label>Top-down Raglan Jumper</label>
      </div>

      <div>
        <input
          type="radio"
          value="drop-shoulder"
          onChange={handlePickJumperShape}
          name="pick-jumper"
        ></input>
        <label>Drop-shoulder seamed Jumper</label>
      </div>

      <div>
        <input
          type="radio"
          id="bottom-up"
          onChange={handlePickJumperShape}
          name="pick-jumper"
        ></input>
        <label>Bottom-up Raglan Jumper</label>
      </div>

      <h3>Pick a Neckline Shape</h3>
      <div>
        <input
          type="radio"
          value="folded-neckline"
          onChange={handlePickNecklineShape}
          name="pick-neckline"
        ></input>
        <label>Folded round neckline</label>
      </div>

      <div>
        <input
          value="v-shape"
          type="radio"
          onChange={handlePickNecklineShape}
          name="pick-neckline"
        ></input>
        <label>V-shape neckline</label>
      </div>

      <div>
        <input
          type="radio"
          value="boat-neck"
          onChange={handlePickNecklineShape}
          name="pick-neckline"
        ></input>
        <label>Boat neckline</label>
      </div>

      <div>
        <input
          value="round-neck"
          type="radio"
          onChange={handlePickNecklineShape}
          name="pick-neckline"
        ></input>
        <label>Round neckline</label>
      </div>
      <button onClick={submitJumperAndNeckShape}>Submit Selection</button>
    </div>
  );
};

export default PickShape;
