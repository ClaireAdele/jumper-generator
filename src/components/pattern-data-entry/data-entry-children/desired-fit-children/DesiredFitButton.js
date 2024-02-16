const DesiredFitButton = ({ easeAmountOption, setEaseAmount, setSuccessMessage, finalJumperData, setFinalJumperData }) => { 

    const handleClick = () => {
        setEaseAmount(easeAmountOption);

        const updatedFinalJumperData = finalJumperData;
        updatedFinalJumperData.easeAmount = easeAmountOption.ease;
        setFinalJumperData(updatedFinalJumperData);

        setSuccessMessage(`Your desired fit: ${easeAmountOption.text}`);
    }

    return (
        <button className="ease-selector-button" onClick={ handleClick }>
            {easeAmountOption.text}
        </button>
    );
}

export default DesiredFitButton; 