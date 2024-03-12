const validateData = (jumperAndNeckShape, jumperData) => {
    const keys = Object.keys(jumperData);

    if (!keys.includes("chestCircumference") || jumperData.chestCircumference === "")
        return false;

    if (!keys.includes("armLength") || jumperData.armLength === "")
        return false;

    if (!keys.includes("bodyLength") || jumperData.bodyLength === "")
        return false;

    if (jumperAndNeckShape.jumper === "top-down-raglan") { 
        return true; 
    }

    if (!keys.includes("necklineToChest") || jumperData.necklineToChest === "")
        return false;

    if (!keys.includes("shoulderWidth") || jumperData.shoulderWidth === "")
        return false;

    return true; 
};

export { validateData }
