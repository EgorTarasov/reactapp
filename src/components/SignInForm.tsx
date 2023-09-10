import {
    Stack,
    Button,
    Container,
    CssBaseline,
    Box,
    Grid,
    TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/user/authApiSlice";
import { setCredentials } from "../features/user/authSlice";

export default function SignInForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, { isLoading }] = useLoginMutation();

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const data = await login({
                username: email,
                password: password,
            }).unwrap();

            dispatch(
                setCredentials({ accessToken: data.accessToken, user: null }),
            );
            navigate("/");
        } catch (err: any) {
            if (err.response) {
                setError("Network error");
            } else if (err.response.status === 400) {
                setError("Invalid credentials");
            } else if (err.response.status === 401) {
                setError("Unauthorized");
            } else {
                setError("Login error");
            }
            console.log(error);
        }
    }

    return (
        <Box component="form" onSubmit={handleLogin} sx={{ ml: 2, pl: 2 }}>
            <Stack direction="column">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        fullWidth
                                        id="email"
                                        label="Почта"
                                        name="email"
                                        autoComplete=""
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        sx={{
                                            background: "#F0F1F5",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete=""
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        sx={{
                                            background: "#F0F1F5",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            height: 56,
                                        }}
                                    ></Box>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    background: "C059FF",
                                }}
                            >
                                Войти
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Stack>
        </Box>
    );
}
