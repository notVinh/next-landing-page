import axios from "axios";

const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

export const sendQuoteRequest = async (formData: any) => {
  const data = await axios.post(
    `${backendUrl}/quotations/public/submit`,
    formData,
  );

  return data.data;
};
