import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Cargando from './components/Cargando'
import Galeria from "./components/Galeria"
import { useState, useEffect } from "react"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`;
const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
margin: 0 auto;
`;
const MainContainer = styled.main`
  display: flex;
  gap:24px;
`;
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {

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

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:5000/fotos');
      const data = await res.json();
      setFotosDeGaleria([...data]);
    };

    setTimeout(() => getData(), 3000);
  }, []);

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera setSearch={setSearch} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
              {
                fotosDeGaleria.length === 0
                  ? <Cargando />
                  : <Galeria
                    search={search}
                    alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                    fotos={fotosDeGaleria}
                    alAlternarFavorito={alAlternarFavorito} />

              }
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
        <Pie />
      </FondoGradiente>
    </>
  )
}

export default App
