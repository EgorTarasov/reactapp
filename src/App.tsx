import { useState, useEffect } from "react";

import "./App.css";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/SignUpSide";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import pb from "./lib/pocketbase";

function App() {
    // create a new instance of PocketBase with useEffect
    // const pb = new PocketBase("http://192.168.1.80:9999");

    const [user, setUser] = useState<any | null>(null);
    const navigate = useNavigate();

    async function onSignIn(email: string, password: string) {
        try {
            const userData = await pb
                .collection("users")
                .authWithPassword(email, password);

            setUser(userData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    async function logout() {
        pb.authStore.clear();
        navigate("/login");
    }

    async function onSignUp(email: string, username: string, password: string) {
        console.log("onSignUp");
        console.log({
            email: email,
            password: password,
            username: username,
        });
        const data = {
            username: username,
            email: email,
            emailVisibility: true,
            password: password,
            passwordConfirm: password,
            name: username,
        };
        console.log(data);
        try {
            const userData = await pb.collection("users").create(data);

            setUser(userData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage onLogout={logout} />}></Route>
            <Route path="/login" element={<SignInSide onSignIn={onSignIn} />} />
            <Route path="/signup" element={<SignUp onSignUp={onSignUp} />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
