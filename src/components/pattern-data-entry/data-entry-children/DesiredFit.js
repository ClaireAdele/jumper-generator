import "../../../App.css";
import "../DataEntry.css";

const DesiredFit = () => { 
    return (
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
    )
}

export default DesiredFit;
