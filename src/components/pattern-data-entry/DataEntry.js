import "../../App.css";
import HowToTakeMeasurements from "./HowToTakeMeasurements";
import "./DataEntry.css"

const DataEntry = () => {
    return (
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="data-entry-page">
            <div id="data-entry-container">
              <div id="measurements-form-container">
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
              </div>
              <div id="ease-selection-container">
                <h3>Desired Fit</h3>
                <h4>Pick a standard amount of ease:</h4>
                <button className="ease-selector-button">Fitted</button>
                <button className="ease-selector-button">Standard</button>
                <button className="ease-selector-button">Loose</button>
                <button className="ease-selector-button">Oversized</button>
                <h4>Or add a custom amount:</h4>
                <input type="number"></input>
                <button>Submit</button>
              </div>
            </div>
            <h2>How to take your measurements</h2>
            <HowToTakeMeasurements />
          </div>
        </div>
      </div>
    );
};

export default DataEntry;


