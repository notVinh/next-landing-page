import axios from "axios";

const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

export const sendQuoteRequest = async (formData: any) => {
  const data = await axios.post(
    `${backendUrl}/quotations/public/submit`,
    formData,
  );

  return data.data;
};

export const getQuoteByToken = async (token: string) => {
  const data = await axios.get(`${backendUrl}/quotations/confirm/${token}`);

  return data.data;
};

export const confirmQuoteByCustomer = async (
  token: string,
  customerData: {
    customerName: string;
    customerPhone: string;
    customerAddress: string;
  },
) => {
  const data = await axios.post(
    `${backendUrl}/quotations/customer-confirm/${token}`,
    customerData,
  );

  return data.data;
};
