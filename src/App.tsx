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
import AdminUserProfile from "./pages/AdminUserProfile";
import CommunityPage from "./pages/TestPage";
import AddHackPage from "./pages/AddHackPage";
import TeamsPage from "./pages/TeamsPage";
import "./App.css";
import NewsPage from "./pages/NewsPage";
function App() {
    // const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/auth" element={<AuthPage />} />
            {/* protected routes */}
            <Route element={<RequireAuth />}>
                <Route path="/me" element={<ProfilePage />} />
                <Route path="/add_hack" element={<AddHackPage />} />
                <Route path="/survey" element={<SignUpSurveyPage />} />
                <Route
                    path="/recommendations"
                    element={<RecomendationsPage />}
                />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/_/" element={<IndexPage />} />
                <Route path="/admin" element={<AdminUserProfile />} />
            </Route>
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

// вспышка на крыше электровоза снятие напряжение контактной сети
