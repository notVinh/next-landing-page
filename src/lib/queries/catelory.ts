import axios from "axios";

const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

export const getCatelory = async () => {
  const data = await axios.get(`${backendUrl}/categories`);
  return data;
};
