import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const baseToastOptions = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export function errorToast(message) {
  toast.error(message, baseToastOptions);
}

export function successToast(message) {
  toast.success(message, baseToastOptions);
}

export {ToastContainer as ToastContainer} from "react-toastify";