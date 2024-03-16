import "./Modal.css";
import ReactDOM  from "react-dom";

const Backdrop = () => {
  return <div className="backdrop">

  </div>
}

const ModalOverlay = (props) => {
  return <div className="modal">
    <div>{props.children}</div>
  </div>
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <>
   {ReactDOM.createPortal(<Backdrop />,portalElement)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  )
}

export default Modal;