import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import "./App.css";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/SignUpSide";
import NotFoundPage from "./pages/NotFoundPage";
import TestActivityPage from "./pages/protected/TestActivityPage";
import AuthPage from "./pages/AuthPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./pages/protected/ProtectedRoutes";
import { CssBaseline } from "@mui/material";
import "./App.css";

function App() {
    const [user, setUser] = useState<any | null>(null);
    const navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                main: "#605DE3",
            },
            secondary: {
                main: "#605DE380",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path="/*" element={<ProtectedRoutes />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
