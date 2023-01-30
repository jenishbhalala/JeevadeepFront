import axios from "../../service/api";
import { BLOG_GET_FAIL, BLOG_GET_REQUEST, BLOG_GET_SUCCESS } from "../types";

export const getBlogData = () => async (dispatch) => {
    dispatch({ type: BLOG_GET_REQUEST });
    try {
        const  data  = await axios.get(`/api/v1/blog/`);
        console.log("data",data)
        dispatch({ type: BLOG_GET_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: BLOG_GET_FAIL, payload: error.response.data })
    }
}
