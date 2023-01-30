import { adminBaseUrl, adminBaseUrl1, } from "./baseUrl";
import axios from "axios";

const adminAxiosInstance = axios.create({
  baseURL: adminBaseUrl,
});
export const adminAxiosInstance1 = axios.create({
  baseURL: adminBaseUrl1,
});


export default adminAxiosInstance;
