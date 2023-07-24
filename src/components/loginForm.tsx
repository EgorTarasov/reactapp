import { Card, Stack, Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { testVkAuth } from "../lib/api";
import { redirect } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    async function loginWithVk() {
        console.log("Hello");
        const url: string = await testVkAuth();
        console.log(url);
        window.location.replace(url);
    }

    return (
        <Card
            sx={{ width: 440, height: 452 }}
            component="form"
            onSubmit={handleLogin}
        >
            <Stack spacing={2}>
                <Button
                    onClick={async () => {
                        await loginWithVk();
                    }}
                >
                    AuthWithVk
                </Button>
            </Stack>
        </Card>
    );
}
