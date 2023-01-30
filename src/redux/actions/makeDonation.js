import axios from "../../service/api";
import { CREATE_MAKE_DONATION_FAIL, CREATE_MAKE_DONATION_REQUEST, CREATE_MAKE_DONATION_SUCCESS } from "../types";

export const createMakeDonate = (makeDonate) => async (dispatch) => {
    dispatch({ type: CREATE_MAKE_DONATION_REQUEST });
    try {
        const { data } = await axios.post(`/api/v1/make-donation/`, makeDonate);
        dispatch({ type: CREATE_MAKE_DONATION_SUCCESS, payload: data });
        console.log("data", data);
    } catch (error) {
        dispatch({ type: CREATE_MAKE_DONATION_FAIL, payload: error.response.data })
    }
}