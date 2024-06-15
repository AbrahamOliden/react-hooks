import { createContext } from "react";

const GlobalContext = createContext();

import React from 'react'

const GlobalContextProvider = ({children}) => {
    
    //const [search, setSearch] = useState('');

    return (
        <GlobalContext.Provider /*value={{ search, setSearch } }*/ >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;