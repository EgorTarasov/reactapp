import { useEffect, useState } from "react";
import pb from "../../lib/pocketbase";
import { Button, Container } from "@mui/material";
import { logout } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export default function TestActivityPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (pb.authStore.model == null) {
            navigate("/auth");
        }
    }, []);

    async function handleLogout() {
        await logout();
        navigate("/auth");
    }

    return (
        <>
            {/* <NavBar /> */}
            <Container component={"main"}>
                <iframe
                    src="https://h5p.org/h5p/embed/617"
                    width="1090"
                    height="675"
                    allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    title="Interactive Video"
                ></iframe>
                <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js"></script>
                <Button onClick={handleLogout}>Logout</Button>
            </Container>
        </>
    );
}
