import { useEffect, useState } from "react";
import pb from "../../lib/pocketbase";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import H5pPlayer from "../../components/H5pPlayer";

export default function TestActivityPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (pb.authStore.model == null) {
            navigate("/auth");
        }
    }, []);

    return (
        <>
            <Container component={"main"}>
                <H5pPlayer />
            </Container>
        </>
    );
}
