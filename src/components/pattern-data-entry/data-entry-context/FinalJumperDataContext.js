import { createContext, useState } from "react";
import React from "react";

const FinalJumperDataContext = createContext({
    finalJumperData: {},
    setFinalJumperData: () => { }
});

const FinalJumperDataContextProvider = ({ children }) => { 
    const [finalJumperData, setFinalJumperData] = useState({});
    const contextValue = {
        finalJumperData,
        setFinalJumperData
    }

    console.log(finalJumperData);
    
    return (
        <FinalJumperDataContext.Provider value={contextValue}>
            {children}
        </FinalJumperDataContext.Provider>
    )
}

export { FinalJumperDataContextProvider, FinalJumperDataContext } ;