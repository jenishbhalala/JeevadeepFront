import * as Yup from "yup";

export const EditAdminSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("city is required"),
  //   profileImage: Yup.string().required("profile Pic is required"),
});
