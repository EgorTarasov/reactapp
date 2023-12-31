import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_HOST from "./api";

const baseQuery = fetchBaseQuery({
    baseUrl: API_HOST,
    // add type to getState from redux store
    prepareHeaders: (headers, { getState }) => {
        // @ts-ignore
        const token = getState().auth.token;
        console.log(`build headers ${token}`);
        if (token === null) {
            // get token from local storage
            const localToken = localStorage.getItem("token");
            headers.set("authorization", `Bearer ${localToken}`);
        } else {
            headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,

    endpoints: (builder) => ({
        test: builder.query({
            query: () => "/api/v1/test",
        }),
    }),
});
