import { useState, useEffect, createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  search: '',
  fotosDeGaleria: [],
  fotoSeleccionada: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return;
    case 'SET_FOTOS_DE_GALERIA':
      return;
    case 'SET_FOTO_SELECCIONADA':
      return;
    case 'AL_ALTERNAR_FAVORITO':
      return;
    default:
      return state;
  }
};

const GlobalContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
    
    // const [search, setSearch] = useState('');
    // const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    // const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

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
      };

    useEffect(() => {
        const getData = async () => {
        const res = await fetch('http://localhost:5000/fotos');
        const data = await res.json();
        setFotosDeGaleria([...data]);
        };
    
        setTimeout(() => getData(), 3000);
      }, []);

    return (
        <GlobalContext.Provider value={
            { search, 
            setSearch,
            fotosDeGaleria,
            fotoSeleccionada,
            setFotoSeleccionada,
            alAlternarFavorito } }>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;