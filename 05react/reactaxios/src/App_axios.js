import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const listCnt = 10;
  const pagerCnt = 5;
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);
  const api = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setData(res.data);
      setTotalPage(res.data.length / listCnt);
    });
  };

  useEffect(() => {
    api();
  }, []);

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startpage = Math.floor((currentpage - 1) / pagerCnt) * pagerCnt + 1;
    const endPage = startpage + pagerCnt - 1;

    for (let i = startpage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          style={{
            cursor: "pointer",
            color: currentpage === i ? "red" : "black",
          }}
          onClick={() => setCurrentpage(i)}
        >
          {i}
        </div>
      );
    }

    return pageNumbers;
  };

  const currentPageData = () => {
    const startIndex = (currentpage - 1) * listCnt;
    const endIndex = startIndex + listCnt;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div>totalPage:{totalPage}</div>
      {currentPageData()?.map((item, index) => {
        return (
          <div key={index}>
            {item.id}. {item.title}
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "10px 0",
        }}
      >
        <button
          onClick={() => {
            setCurrentpage((p) => p - 1);
          }}
          disabled={currentpage <= 1}
        >
          이전
        </button>

        <div style={{ fontSize: "2em", display: "flex", gap: "5px" }}>
          {pageViewNumber()}
        </div>

        <button
          onClick={() => {
            setCurrentpage((p) => p + 1);
          }}
          disabled={currentpage >= totalPage}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default App;
