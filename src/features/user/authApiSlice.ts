import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: {
                    email: username,
                    password: password,
                },
            }),
        }),

        register: builder.mutation({
            query: ({ first_name, last_name, password, email }) => ({
                url: "/auth/signup",
                method: "POST",
                body: {
                    first_name: first_name,
                    last_name: last_name,
                    password: password,
                    email: email,
                },
            }),
        }),
        getCurrentUser: builder.mutation({
            query: () => ({
                url: "/api/v1/users/me",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetCurrentUserMutation,
} = authApiSlice;
