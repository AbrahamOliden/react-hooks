import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"


const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {

    const { setSearch } = useContext(GlobalContext)

    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto setSearch={setSearch} />
    </HeaderEstilizado>
}

export default Cabecera