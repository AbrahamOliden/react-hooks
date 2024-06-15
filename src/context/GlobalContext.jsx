import { createContext } from "react";

const GlobalContext = createContext();

import React from 'react'

const GlobalContextProvider = ({children}) => {
    
    const [search, setSearch] = useState('');
    const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    const alAlternarFavorito = (foto) => {

        if (foto.id === fotoSeleccionada?.id) {
          setFotoSeleccionada({
            ...fotoSeleccionada,
            favorita: !fotoSeleccionada.favorita
          })
    
        }
    
        setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
          return {
            ...fotoDeGaleria,
            favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
          }
        }))
      }

    return (
        <GlobalContext.Provider value={{ search, setSearch } } >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;