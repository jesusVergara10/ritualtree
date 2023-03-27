import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albums = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/album" }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAllAlbum: builder.query({
      query: () => "/",
      providesTags: ["Album"],
    }),
    getAlbumById: builder.query({ query: (id) => `/${id}` 
    }),
    getAlbumByUpdate: builder.query({
      query: (id) => `/getalbumbyupdate/${id}`,
    }),
    getAlbumSearch: builder.query ({
      query: (arg)=>({
        url: "/search",
        method: "GET",
        params: {query:arg}
      })

    }),
    createAlbums: builder.mutation({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Album"],
    }),
    updateAlbum: builder.mutation({
      query: ({id, ...body}) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Album"],
    }),
    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Album"],
    }),
  }),
});

export const {
  useGetAllAlbumQuery,
  useGetAlbumByIdQuery,
  useCreateAlbumsMutation,
  useUpdateAlbumMutation,
  useGetAlbumSearchQuery,
  useDeleteAlbumMutation
} = albums;
