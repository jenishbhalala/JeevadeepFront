import { combineReducers } from 'redux';
import { becomeCreateReducer, blogGetReducer, contactGetReducer, createMakeDonateReducer, createRegisterReducer, gallaryGetReducer, sliderGetReducer, volunteerGetReducer,changeState } from './rootReducer';


export default combineReducers({
    volunteer: volunteerGetReducer,
    becomeCreate: becomeCreateReducer,
    getSlider: sliderGetReducer,
    createContact: contactGetReducer,
    getBlog: blogGetReducer,
    getGallary: gallaryGetReducer,
    createMakeDonation: createMakeDonateReducer,
    createRegister: createRegisterReducer,
    changeState:changeState
});
