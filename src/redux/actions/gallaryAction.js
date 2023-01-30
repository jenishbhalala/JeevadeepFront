import axios from "../../service/api";
import { GET_GALLARY_FAIL, GET_GALLARY_REQUEST, GET_GALLARY_SUCCESS } from "../types";

export const getGallary = () => async (dispatch) => {
    dispatch({ type: GET_GALLARY_REQUEST });
    try {
        const { data } = await axios.get(`/api/v1/gallery/`);
        dispatch({ type: GET_GALLARY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_GALLARY_FAIL, payload: error.response.data })
    }
}
