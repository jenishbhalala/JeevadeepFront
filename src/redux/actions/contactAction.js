import axiosInstance from "../../service/api";
import { CONTACT_CREATE_FAIL, CONTACT_CREATE_REQUEST, CONTACT_CREATE_SUCCESS } from "../types";

export const getCreateContact = (contactData) => async (dispatch) => {
    dispatch({ type: CONTACT_CREATE_REQUEST });
    try {
        const { data } = await axiosInstance.post(`/api/v1/contact-us/`, contactData);
        dispatch({ type: CONTACT_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CONTACT_CREATE_FAIL, payload: error.response.data })
    }
}