import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const SwalSuccess = (props) => {
    const navigate = useNavigate();
    console.log("props",props)
    swal({
        title: "Sucess",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        // navigate("navigates");
      })
       return props

}