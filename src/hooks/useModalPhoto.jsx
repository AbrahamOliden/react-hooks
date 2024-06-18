import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useModalPhoto() {
    const { state, dispatch } = useContext(GlobalContext);

    const openModal = (foto) => {
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: foto})
    };

    const closeModal = () => {
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: null})
    };

    const selectedPhoto = state.fotoSeleccionada;

    const isModalOpen = state.modalAbierto;

    return { selectedPhoto, isModalOpen, openModal, closeModal };
};

export default useModalPhoto;