"use server";
import axiosInstance from "@/shared/config/axios.config";

export const inquiryToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/inquiry", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(`Inquiry Error : ${error?.message}`);
  }
};
export const contactToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/base/contact-us", data);
    return res?.data;
  } catch (error: any) {
    console.log("contact Error", error);
    throw new Error(`Contact Error : ${error?.message}`);
  }
};
