import * as Yup from "yup";
export const BlankImage = "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Name is required "),
   password: Yup.string().required("Password is required"),
});
export const AdminLoginSchema = Yup.object().shape({
  mobile: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field "),
});
export const cpLoginSchema = Yup.object().shape({
  mobile: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field "),
});
export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    // .max(30, "Must be 15 characters or less")
    .required("Name is required "),
  mobile: Yup.string()
    .required("number  is required")
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
    .min(7, "number must be min 7 digit")
    .max(15, "number must be max 15 digit"),
  // .matches(/^-?d*.?d*$/, "String value is not required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  state: Yup.string()
    .required("state is required")
    .matches(/^[aA-zZ\s]+$/, "Only charector are allowed for this field "),
  country: Yup.string()
    .required("country is required")
    .matches(/^[aA-zZ\s]+$/, "Only charector are allowed for this field "),
  city: Yup.string()
    .required("city is required")
    .matches(/^[aA-zZ\s]+$/, "Only charector are allowed for this field "),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  //   confirmPassword: Yup.string()
  //     .required()
  //     .oneOf([Yup.ref("password"), null], "Passwords must match"),
  //   .matches(
  //     "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
  //     "Minimum eight characters, at least one letter and one number"
  //   ),
});

export const userSignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    // .max(30, "Must be 15 characters or less")
    .required("Name is required "),
  mobile: Yup.string()
    .required("number  is required")
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
    .min(7, "number must be min 7 digit")
    .max(15, "number must be max 15 digit"),
  // .matches(/^-?d*.?d*$/, "String value is not required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  state: Yup.string()
    .required("state is required")
    .matches(/^[aA-zZ\s]+$/, "Only charector are allowed for this field "),
  country: Yup.string()
    .required("country is required")
    .matches(/^[aA-zZ\s]+$/, "Only charector are allowed for this field "),
  city: Yup.string()
    .required("city is required")
    .matches(/^[aA-zZ\s]+$/, "Only charector are allowed for this field "),
});

export const partnerSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .required("number  is required")
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
    .min(7, "number must be min 7 digit")
    .max(15, "number must be max 15 digit"),
  // .max(10, "number must be 10 digit"),
});

export const addCompanySchema = Yup.object().shape({
  name: Yup.string().required("Name is required "),
  urlName: Yup.string().required("URL Name is required "),
  pricePerShare: Yup.string().required("Price is required "),
  // .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field "),
  // region: Yup.string().required("Region is required "),
  sector: Yup.string().required("Sector is required "),
  // status: Yup.string().required("Status is required "),
  isPortfolio: Yup.string().required("In Portfolio is required "),
  // portfolioType: Yup.string().required("In Portfolio Type is required "),
  // top: Yup.string().required("Top is required "),
  isinCode: Yup.string().required("ISIN Code is required "),
});

export const careerSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .required("number  is required")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field "),
  // .min(10, "number must be 10 digit")
  // .max(10, "number must be 10 digit"),
  position: Yup.string().required("Position is required "),
  resume: Yup.string().required("Resume is required "),
});
export const addUserSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .required("Mobile number  is required")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
    .min(7, "number must be min 7 digit")
    .max(15, "number must be max 15 digit"),
});
export const addCPSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .required("Mobile number  is required")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
    .min(7, "number must be min 7 digit")
    .max(15, "number must be max 15 digit"),
});
export const addStaffSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required "),
  mobile: Yup.string()
    .required("Mobile number  is required")
    .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
    .min(7, "number must be min 7 digit")
    .max(15, "number must be max 15 digit"),
  employeeCode: Yup.string().required("Employee Code is required"),
});
export const addExternalStockSchema = Yup.object().shape({
  companyName: Yup.string().required("Company Name is required "),
  sector: Yup.string().required("Sector is required "),
  price: Yup.string().required("Price is required "),
  quantity: Yup.string().required("Quantity is required "),
  stockDescription: Yup.string().required("External Stock is required "),
});
export const DonationValllidation = Yup.object().shape({
  full_name: Yup.string().max(50, 'Too Long!').required('Required'),
  comment: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  value: Yup.number().required('Required'),
});


export const BecomeVlounteersValidation = Yup.object().shape({
  full_name: Yup.string().max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.number().required('Required'),
  address: Yup.string().required('Required'),
  occupation: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
  birth_date: Yup.string().required('Required'),
});

export const ourvoluntersValidation =  Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  occupation: Yup.string().required('Required'),
  // image: Yup.string().required('Required'),
});
export const blogValidation =  Yup.object().shape({
  heading: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  image: Yup.string().required('Required'),
});
