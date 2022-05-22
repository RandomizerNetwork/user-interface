import { toast } from 'react-toastify';

const config = {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark"
}
const dismissToast = (text, id, delay) => {
    toast.dismiss(text, {
        ...config,
        autoClose: delay,
        toastId: id
    });
}

const launchToast = (text, id, delay) => {
    toast.success(text, {
        ...config,
        autoClose: delay,
        toastId: id
    });
}

const warningToast = (text, id, delay) => {
    toast.warning(text, {
        ...config,
        autoClose: delay,
        toastId: id
    });
}

export {
    warningToast, launchToast, dismissToast
}