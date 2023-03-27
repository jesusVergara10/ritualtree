import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const users = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/user" }),
  tagTypes: ["me"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/`,
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
    }),
    updateCurrentUser: builder.mutation({
      query: (body) => ({
        url: `/update`,
        method: "PUT",
        body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    login: builder.mutation({
      query: (body=>({
        url: `/login`,
        method: "POST",
        body,
      })),      
      invalidatesTags:["me"]
    }),
    me: builder.query({
      query: ()=> "/me",
      providesTags:["me"]
    }),
    logout: builder.mutation({
      query: ()=>({
        url:"/logout",
        method:"POST"
      }),
      invalidatesTags:["me"]
    })
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUpdateCurrentUserMutation,
  useLoginMutation,
  useMeQuery,
  useLogoutMutation
} = users;
