import React from "react";
import Layout from "../../layout/Layout";
import { Outlet, useNavigate } from "react-router-dom";

function IndexPage() {
  // const navigate = useNavigate();

  // const clickList = () => {
  //   navigate({ pathname: "list" });
  // };

  // const clickAdd = () => {
  //   navigate({ pathname: "add" });
  // };

  // const clickRead = () => {
  //   navigate({ pathname: `list/1` });
  // };
  return (
    <Layout>
      {/* <nav>
        <ul className="flex gap-4 justify-end">
          <li className="cursor-pointer" onClick={clickList}>
            List
          </li>
          <li className="cursor-pointer" onClick={clickAdd}>
            Add
          </li>
          <li className="cursor-pointer" onClick={clickRead}>
            Read
          </li>
        </ul>
      </nav> */}

      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
