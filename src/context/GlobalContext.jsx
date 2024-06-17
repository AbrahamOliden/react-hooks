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
      return {...state, search: action.payload};
    case 'SET_FOTOS_DE_GALERIA':
      return {...state, fotosDeGaleria: action.payload};
    case 'SET_FOTO_SELECCIONADA':
      return {...state, fotoSeleccionada: action.payload};
    case 'AL_ALTERNAR_FAVORITO':

    const fotosDeGaleria = state.fotosDeGaleria.map( fotoDeGaleria => {
      return {...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id 
          ? !foto.favorita
          : fotoDeGaleria.favorita
      }
    });

    if (action.payload.id === state.fotoSeleccionada.id) {
      return {...state,
        fotosDeGaleria: fotosDeGaleria,
        fotoSeleccionada: {
          ...state.fotoSeleccionada, favorita: !fotoSeleccionada.favorita
        }
      };
    } else {
      return {...state, 
        fotosDeGaleria: fotosDeGaleria
      }
    }

    default:
      return state;
  }
};

const GlobalContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
    
    // const [search, setSearch] = useState('');
    // const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    // const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    // const alAlternarFavorito = (foto) => {

    //     if (foto.id === fotoSeleccionada?.id) {
    //       setFotoSeleccionada({
    //         ...fotoSeleccionada,
    //         favorita: !fotoSeleccionada.favorita
    //       })
    
    //     }
    
    //     setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
    //       return {
    //         ...fotoDeGaleria,
    //         favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
    //       }
    //     }))
    //   };

    useEffect(() => {
        const getData = async () => {
        const res = await fetch('http://localhost:5000/fotos');
        const data = await res.json();
        // setFotosDeGaleria([...data]);
        dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data })
        };
    
        setTimeout(() => getData(), 3000);
      }, []);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;