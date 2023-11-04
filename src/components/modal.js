import React from "react";
import Modal from "react-modal";
import "./modal.css";
import { colors } from "@mui/material";
import exitbtn from "./exit.png";

Modal.setAppElement("#root"); // 모달이 화면에 렌더링될 DOM 요소를 설정

function ModalComponent(props) {
  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070"
    },
    content: {
      width: "1200px",
      height: "900px",
      inset: "unset",
      margin: "50vh auto",
      padding: 0,
      transform: "translateY(-50%)",
      position: "relative",
      background: "#FFFFFF",
      fontcolor : "black"
    },
  };
  return (
    <Modal
      isOpen={props.isOpen} // 모달이 열려 있는지 여부를 결정하는 prop
      onRequestClose={props.onRequestClose}
      style={customStyles} // 모달 닫기 요청 시 호출되는 콜백
    >
      <div className="modal-wrapper">
        <h3 className="title">{props.title}</h3>
        <div className="info">
          <p className="newscom">{props.newscom}</p>
          <p className="date">{props.date}</p>
        </div>
        <div className="content">
          <img className="img" src={props.img}></img>
          <p className="news">{props.content}</p>
        </div>
        <button className="closeBtn" onClick={props.onRequestClose}>
          <img src={exitbtn}/>
        </button>
      </div>
      
      
      
    </Modal>
  );
}

export default ModalComponent;
