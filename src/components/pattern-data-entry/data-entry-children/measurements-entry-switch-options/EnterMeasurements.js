import { useState } from "react";

const EnterMeasurements = ({ jumperAndNeckShape, setToggleComponent }) => {
  const [jumperData, setJumperData] = useState({});


  const handleClick = () => { 
    setToggleComponent("pick-shape");
  }

  const handleInput = (event) => { 
    console.log(event.target.value)
    const key = event.target.name;
    const value = event.target.value;
    const updatedObject = jumperData;
    updatedObject[key] = value;
    setJumperData(updatedObject);
  }
  console.log(jumperData)

  if (jumperAndNeckShape.jumper == "top-down-raglan") {
    return (
      <div className="measurements-entry-tile">
        <h3>Top Down Raglan</h3>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
        ></input>
        <p>Arm Length</p>
        <input onChange={handleInput} name="armLength" type="number"></input>
        <p>Body length</p>
        <input onChange={handleInput} name="bodyLength" type="number"></input>
        <button onClick={handleClick}>Pick different shape</button>
      </div>
    );
    /*
    chest circumference
    arm length? - cuff - how much ribbing?
    body length
    */
  }

  if (jumperAndNeckShape.jumper == "drop-shoulder") {
    return (
      <div className="measurements-entry-tile">
        <h3>Drop-shoulder</h3>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
        ></input>
        <p>Body length</p>
        <input onChange={handleInput} name="bodyLength" type="number"></input>
        <p>Bottom of neckline to chest line</p>
        <input
          onChange={handleInput}
          name="necklineToChest"
          type="number"
        ></input>
        <p>Shoulder width</p>
        <input
          onChange={handleInput}
          name="shoulderWidth"
          type="number"
        ></input>
        <p>Arm Length</p>
        <input onChange={handleInput} name="armLength" type="number"></input>
        <button onClick={handleClick}>Pick different shape</button>
      </div>
    );
    /*body length
     shoulders width
     arm length
     chest circumference
     neckline to chest line*/
  }

  if (jumperAndNeckShape.jumper == "bottom-up") {
    return (
      <div className="measurements-entry-tile">
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
        ></input>
        <p>Body length</p>
        <input onChange={handleInput} name="bodyLength" type="number"></input>
        <p>Bottom of neckline to chest line</p>
        <input
          onChange={handleInput}
          name="necklineToChest"
          type="number"
        ></input>
        <p>Shoulder width</p>
        <input
          onChange={handleInput}
          name="shoulderWidth"
          type="number"
        ></input>
        <p>Arm Length</p>
        <input onChange={handleInput} name="armLength" type="number"></input>
        <button onClick={handleClick}>Pick different shape</button>
      </div>
    );
  }
};

export default EnterMeasurements;
