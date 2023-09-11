import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserSkill = {
    id: number;
    skill_name: string;
};

export type UserGoal = {
    id: number;
    goal_name: string;
};

export type UserRole = {
    id: number;
    role_name: string;
};

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    internal_role: string;
    level: number;
    tg_username: string;
    graduation_year: string;
    image_url: string;
    skills: UserSkill[];
    roles: UserRole[];
    goals: UserGoal[];
};

type AuthState = {
    token: string | null;
    user: User | null;
};

type AuthData = {
    accessToken: string | null;
    user: any;
};

type UserData = {
    user: User;
};

const authSlice = createSlice({
    name: "auth",
    initialState: <AuthState>{
        token: null,
        user: null,
    },
    reducers: {
        setCredentials: (state: AuthState, action: PayloadAction<AuthData>) => {
            // if (action.payload.accessToken === null) {
            //     return;
            // }
            // log state.token with description message
            console.log("state.token: ", state.token);
            if (action.payload.accessToken) {
                state.token = action.payload.accessToken;
                localStorage.setItem("token", state.token!);
            }
            state.user = action.payload.user;
        },
        setUser: (state: AuthState, action: PayloadAction<any>) => {
            state.user = action.payload.user;
        },
        logoutUser: (state: AuthState) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
    },
});

export default authSlice.reducer;
export const { setCredentials, logoutUser, setUser } = authSlice.actions;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
