const DesiredFitButton = ({ easeAmountOption, setEaseAmount, setSuccessMessage }) => { 

    const handleClick = () => {
        setEaseAmount(easeAmountOption);
        setSuccessMessage(`Your desired fit: ${easeAmountOption.text}`);
    }

    return (
        <button className="ease-selector-button" onClick={ handleClick }>
            {easeAmountOption.text}
        </button>
    );
}

export default DesiredFitButton; 