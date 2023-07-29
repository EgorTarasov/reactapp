import { Box, Stack, Card, Typography, IconButton } from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import LandingPage from "../components/landingPage";
import SignInUpSwitch from "../components/signInUpSwitch";
import { useState, useEffect } from "react";
import TelegramLoginButton from "react-telegram-login";
import VkIcon from "../icons/vk";
import TelegramIcon from "../icons/telegram";
import { useTheme } from "@mui/material/styles";
import { VkAuth } from "../lib/api";
import { useNavigate } from "react-router-dom";
import { register, checkAuth } from "../lib/api";

export default function AuthPage() {
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkAuth()) {
            navigate("/");
        }
    }, []);

    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    const handleSignUpButton = () => {
        setIsSignIn(false);
    };

    const handleSignInButton = () => {
        setIsSignIn(true);
    };

    const handleVkAuth = async () => {
        const redirect_url = await VkAuth();
        window.location.replace(redirect_url);
    };

    async function handleTelegramResponse(response: any) {
        // TODO: создание пользователя через backend
        register(response.username, "telegram", response.id);
        navigate("/");
        console.log(response);
    }

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
                <Card sx={{ width: 1148, height: 551 }}>
                    <Stack direction="row" spacing={3}>
                        <Stack
                            direction="column"
                            alignContent={"center"}
                            justifyItems={"center"}
                        >
                            <Typography variant="h1"> Лого</Typography>
                            <SignInUpSwitch
                                isSignIn={isSignIn}
                                handleSignInButton={handleSignInButton}
                                handleSignUpButton={handleSignUpButton}
                            />
                            {isSignIn ? <SignInForm /> : <SignUpForm />}
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyItems={"center"}
                            >
                                <Typography variant="body1">
                                    Или войдите через
                                </Typography>
                                <IconButton onClick={handleVkAuth}>
                                    <VkIcon
                                        height={40}
                                        width={40}
                                        fill={theme.palette.primary.main}
                                    />
                                </IconButton>
                                <IconButton>
                                    <TelegramIcon
                                        height={40}
                                        width={40}
                                        fill={theme.palette.primary.main}
                                    />
                                </IconButton>
                            </Stack>
                            <TelegramLoginButton
                                dataOnauth={handleTelegramResponse}
                                botName="dorogoy_dnevnik_bot"
                            />
                        </Stack>
                        <LandingPage />
                    </Stack>
                </Card>
            </Box>
        </>
    );
}
