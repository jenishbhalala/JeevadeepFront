import axios from "../../service/api";
import { CREATE_REGISTRATION_FAIL, CREATE_REGISTRATION_REQUEST, CREATE_REGISTRATION_SUCCESS } from "../types";

export const createRegister = (registerData) => async (dispatch) => {
    dispatch({ type: CREATE_REGISTRATION_REQUEST });
    try {
        const { data } = await axios.post(`/api/v1/for-organs/`, registerData);
        dispatch({ type: CREATE_REGISTRATION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_REGISTRATION_FAIL, payload: error.response.data })
    }
}