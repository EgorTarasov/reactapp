import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import { useState } from "react";

export default function RecomendationsPage() {
    return (
        <Box>
            <RegisteredNavBar selectedTab="Мои команды" />
        </Box>
    );
}
