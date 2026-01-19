import { useState } from "react";

const usePopups = () => {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

    const openLoginPopup = () => {
        setIsLoginPopupOpen(true);
    };

    const closeLoginPopup = () => {
        setIsLoginPopupOpen(false);
    };

    return { 
        isLoginPopupOpen, 
        openLoginPopup, 
        closeLoginPopup,
        setIsLoginPopupOpen 
    };
};

export { usePopups };