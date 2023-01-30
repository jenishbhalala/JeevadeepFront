import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const SuccesSwal = () => {
    const navigate = useNavigate()
    console.log("callll")
    swal({
        title: "Become volunter  edited Successfully",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/become-volunteers");
      }) 
      return swal
}