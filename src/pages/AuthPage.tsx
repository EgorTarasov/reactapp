import { Box } from "@mui/material";
import LoginForm from "../components/loginForm";
import { useState } from "react";
import Link from "react-router-dom";

export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    const handleSignUpButton = () => {
        setIsSignIn(false);
    };

    const handleSignInButton = () => {
        setIsSignIn(true);
    };

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    translate: "-50% -50%",
                }}
            >
                <LoginForm />
            </Box>
        </>
    );
}
