import "./App.css";
import "./index.css";

import NotFoundPage from "./pages/NotFoundPage";
import IndexPage from "./pages/index";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpSurveyPage from "./pages/SignUpSurveyPage";
import RecomendationsPage from "./pages/RecomendationsPage";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
// import TestPage from "./pages/TestPage";

import "./App.css";

function App() {
    // const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/auth" element={<AuthPage />} />
            {/* protected routes */}
            <Route element={<RequireAuth />}>
                <Route path="/me" element={<ProfilePage />} />
                <Route path="/survey" element={<SignUpSurveyPage />} />
                <Route
                    path="/recommendations"
                    element={<RecomendationsPage />}
                />
                <Route path="/_/" element={<IndexPage />} />
            </Route>

            {/* <Route path="/test" element={<TestPage />} /> */}

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

// вспышка на крыше электровоза снятие напряжение контактной сети
