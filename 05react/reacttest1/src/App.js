import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";
  const [box, setBox] = useState("han");
  const [num, setNum] = useState(1);
  const [modal, setModal] = useState(false);
  const [text2, setText2] = useState("");
  const [title, setTitle] = useState("");
  const [shop, setShop] = useState(["사과", "복숭아", "바나나"]);

  return (
    <>
      <div
        className="container"
        style={{ background: "orange", fontSize: "20px" }}
      >
        test
        <h2>{text}</h2>
        <p>{box}</p>
      </div>
      <header>ddd</header>
      {/* <img src={logo}></img> */}
      <button
        onClick={() => {
          setBox("정환");
        }}
      >
        값 변화
      </button>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum((prev) => prev * 2);
        }}
      >
        곱하기
      </button>
      {shop.map((item, index) => {
        return (
          <>
            <div key={index}>{item}</div>
          </>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          margin: "10px 0",
          gap: "10px",
        }}
      >
        <input
          type="text"
          style={{ width: "200px" }}
          value={text2}
          placeholder="공지사항 명을 입력하세요."
          onChange={(e) => setText2(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setTitle(text2);
            }
          }}
        ></input>
        <button
          onClick={() => {
            setModal((prev) => !prev);
          }}
        >
          모달 on/off
        </button>
      </div>
      {modal && <Modal title={title} detail="안녕 난 Prop 이야!" />}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
      </div>
    </>
  );
}

export default App;
