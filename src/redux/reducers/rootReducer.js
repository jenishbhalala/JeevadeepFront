/* eslint-disable import/no-anonymous-default-export */
import {
  VOLUNTEER_GET_REQUEST, VOLUNTEER_GET_SUCCESS, VOLUNTEER_FAIL,
  BECOME_CREATE_REQUEST, BECOME_CREATE_SUCCESS, BECOME_FAIL,
  SLIDER_GET_REQUEST, SLIDER_GET_SUCCESS, SLIDER_GET_FAIL,
  CONTACT_CREATE_REQUEST, CONTACT_CREATE_SUCCESS, CONTACT_CREATE_FAIL, 
  BLOG_GET_REQUEST, BLOG_GET_SUCCESS, BLOG_GET_FAIL, 
  GET_GALLARY_REQUEST, GET_GALLARY_SUCCESS, GET_GALLARY_FAIL, 
  CREATE_MAKE_DONATION_REQUEST, CREATE_MAKE_DONATION_SUCCESS, CREATE_MAKE_DONATION_FAIL, CREATE_REGISTRATION_REQUEST, CREATE_REGISTRATION_SUCCESS, CREATE_REGISTRATION_FAIL
} from '../types';

export const volunteerGetReducer = (state = { volunteers: [], loading: true }, action) => {
  switch (action.type) {
    case VOLUNTEER_GET_REQUEST:
      return { loading: true };
    case VOLUNTEER_GET_SUCCESS:
      return { loading: false, volunteers: action.payload };
    case VOLUNTEER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const becomeCreateReducer = (state = { becomeCreate: [], loading: true }, action) => {
  switch (action.type) {
    case BECOME_CREATE_REQUEST:
      return { loading: true };
    case BECOME_CREATE_SUCCESS:
      return { loading: false, becomeCreate: action.payload };
    case BECOME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sliderGetReducer = (state = { sliderData: [], loading: true }, action) => {
  switch (action.type) {
    case SLIDER_GET_REQUEST:
      return { loading: true };
    case SLIDER_GET_SUCCESS:
      return { loading: false, sliderData: action.payload };
    case SLIDER_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactGetReducer = (state = { createContact: [], loading: true }, action) => {
  switch (action.type) {
    case CONTACT_CREATE_REQUEST:
      return { loading: true };
    case CONTACT_CREATE_SUCCESS:
      return { loading: false, createContact: action.payload };
    case CONTACT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogGetReducer = (state = { getBlog: [], loading: true }, action) => {
  switch (action.type) {
    case BLOG_GET_REQUEST:
      return { loading: true };
    case BLOG_GET_SUCCESS:
      return { loading: false, getBlog: action.payload };
    case BLOG_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gallaryGetReducer = (state = { getGallary: [], loading: true }, action) => {
  switch (action.type) {
    case GET_GALLARY_REQUEST:
      return { loading: true };
    case GET_GALLARY_SUCCESS:
      return { loading: false, getGallary: action.payload };
    case GET_GALLARY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createMakeDonateReducer = (state = { createDonation: [], loading: true }, action) => {
  switch (action.type) {
    case CREATE_MAKE_DONATION_REQUEST:
      return { loading: true };
    case CREATE_MAKE_DONATION_SUCCESS:
      return { loading: false, createDonation: action.payload };
    case CREATE_MAKE_DONATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createRegisterReducer = (state = { createRegistration: [], loading: true }, action) => {
  switch (action.type) {
    case CREATE_REGISTRATION_REQUEST:
      return { loading: true };
    case CREATE_REGISTRATION_SUCCESS:
      return { loading: false, createRegistration: action.payload };
    case CREATE_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
const initialState = {
  sidebarShow: true,
};
export const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};