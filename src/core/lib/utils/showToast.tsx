import toast from "react-hot-toast";

const showToast = (message: string, type: "success" | "error" = "success") => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  }
};

export default showToast;
