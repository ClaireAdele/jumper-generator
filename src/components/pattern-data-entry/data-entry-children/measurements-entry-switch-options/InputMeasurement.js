const InputMeasurement = ({ label, name, onChange }) => (
  <div className="measurement-row">
    <p>{label}</p>
    <input
      onChange={onChange}
      name={name}
      type="number"
      className="fit-and-measurements-input"
    />
  </div>
);

export default InputMeasurement;