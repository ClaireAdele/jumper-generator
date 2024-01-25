import "../../App.css";
import "./DataEntry.css";

import MeasurementsEntry from "./data-entry-children/MeasurementsEntry";
import HowToTakeMeasurements from "./data-entry-children/HowToTakeMeasurements";
import DesiredFit from "./data-entry-children/DesiredFit";

const DataEntry = () => {
    return (
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="data-entry-page">
            <div id="data-entry-container">
              <MeasurementsEntry />
              <DesiredFit />
            </div>
            <h2>How to take your measurements</h2>
            <HowToTakeMeasurements />
          </div>
        </div>
      </div>
    );
};

export default DataEntry;


{/* <div id="measurements-form-container">
  <h3>Measurements Entry:</h3>
  <table id="prices-table">
    <tr>
      <td>Chest cirumference</td>
      <td>
        <input type="number"></input>
      </td>
    </tr>

    <tr>
      <td>Bottom of jumper to armpit</td>
      <td>
        <input type="number"></input>
      </td>
    </tr>

    <tr>
      <td>Armpit line to neckline</td>
      <td>
        <input type="number"></input>
      </td>
    </tr>

    <tr>
      <td>Arm length - pit to wrist</td>
      <td>
        <input type="number"></input>
      </td>
    </tr>
  </table>
  <button>Submit</button>
</div>; */}
