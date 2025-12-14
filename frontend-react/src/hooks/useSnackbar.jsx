import { useState } from "react";
import Slide from "@mui/material/Slide";
import { Snackbar, Alert } from "@mui/material";

const SlideTransition = (props) => {
    return <Slide {...props} direction="left" />;
};

export const useSnackbar = () => {
    const [config, setConfig] = useState({
        open: false,
        severity: "info",
        message: "",
        duration: 3000,
    });

    const showSnackbar = (severity, message, duration = 3000) => {
        setConfig({
            open: true,
            severity,
            message,
            duration,
        });
    };

    const handleClose = () => {
        setConfig((prev) => ({ ...prev, open: false }));
    };

    const SnackbarComponent = () => {
        return (
            <>
                <Snackbar
                    open={config.open}
                    autoHideDuration={config.duration}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    slots={{ transition: SlideTransition }}
                >
                    <Alert onClose={handleClose} severity={config.severity} variant="filled" sx={{ width: "100%" }}>
                        {config.message}
                    </Alert>
                </Snackbar>
            </>
        );
    };

    return {
        showSnackbar,
        SnackbarComponent,
    };
};
