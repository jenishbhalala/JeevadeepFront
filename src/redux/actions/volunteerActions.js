import axios from "../../service/api";
import { VOLUNTEER_GET_SUCCESS, VOLUNTEER_FAIL, VOLUNTEER_GET_REQUEST, BECOME_CREATE_REQUEST, BECOME_CREATE_SUCCESS, BECOME_FAIL, SLIDER_GET_REQUEST, SLIDER_GET_SUCCESS, SLIDER_GET_FAIL } from "../types";


export const listVolunteers = () => async (dispatch) => {
    dispatch({ type: VOLUNTEER_GET_REQUEST });
    try {
        const { data } = await axios.get(`/api/v1/our-volunteers/`);
        dispatch({ type: VOLUNTEER_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: VOLUNTEER_FAIL, payload: error.message });
    }
};

export const becomeCreateVolunteer = (becomeVolunteer) => async (dispatch) => {
    dispatch({ type: BECOME_CREATE_REQUEST });
    try {
        const { data } = await axios.post(`/api/v1/become-volunteer/`, becomeVolunteer);
        dispatch({ type: BECOME_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BECOME_FAIL, payload: error.response.data })
    }
}

export const getSlider = () => async (dispatch) => {
    dispatch({ type: SLIDER_GET_REQUEST });
    try {
        const { data } = await axios.get(`/api/v1/slider/`);
        dispatch({ type: SLIDER_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SLIDER_GET_FAIL, payload: error.response.data })
    }
}
