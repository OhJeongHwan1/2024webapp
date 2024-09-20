import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import { useSearchParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDto: null,
  prev: false,
  next: false,
  totalCount: 21,
  prevPage: 0,
  nextPage: 0,
  totalPage: 3,
  current: 1,
};

function ListComp() {
  const [data, setData] = useState(initState);
  const { page, size, moveToRead, refresh } = useCustomMove();

  useEffect(() => {
    getList({ page, size }).then((res) => {
      setData(res);
    });
  }, [page, size, refresh]);

  return (
    <div>
      {data?.dtoList?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex border-b-2"
            onClick={() => moveToRead(item.tno)}
          >
            <div className="text-2xl w-1/12">{item.tno}</div>
            <div className="text-2xl w-7/12 font-extrabold">{item.title}</div>
            <div className="text-2xl w-4/12">{item.dueDate}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListComp;
