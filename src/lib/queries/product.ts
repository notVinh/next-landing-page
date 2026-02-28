// import axios from "axios";

const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

// export const getProductById = async (id: string) => {
//   console.log(`${backendUrl}/products/${id}`);
//   const data = await axios.get(`${backendUrl}/products/${id}`);
//   return data.data;
// };

export const getProductById = async (id: string) => {
  console.log(`${backendUrl}/products/${id}`);
  const res = await fetch(`${backendUrl}/products/${id}`, {
    cache: "no-store", // hoặc "force-cache" tùy nhu cầu
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};
