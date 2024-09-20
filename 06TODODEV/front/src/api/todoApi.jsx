import axios from "axios";

const API_SERVER_HOST = "http://localhost:8081";
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const response = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return response.data;
};

export const getOne = async (tno) => {
  const response = await axios.get(`${prefix}/${tno}`);
  return response.data;
};

export const postAdd = async (obj) => {
  const response = await axios.post(`${prefix}/`, obj);
  return response;
};
