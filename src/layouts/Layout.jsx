import { Outlet } from "react-router-dom"
import Modal from 'react-modal';
import Slidebar from "../components/Slidebar"
import Resumen from "../components/Resumen"
import useQuiosco from "../hooks/useQuiosco"
import ModalProducto from "../components/ModalProducto";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

export default function layout() {

  const {modal, handleClickModal} = useQuiosco();
  // console.log(modal);

  

  return (
    <>
      <div className="md:flex">
          <Slidebar />

          <main className="flex-1 h-screen p-3 overflow-y-scroll">
              <Outlet />
          </main>

          <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto/>
      </Modal>
    </>
  )
}
