import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "genre",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/genre" }),
  tagTypes: ["Genre"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "/",
      providesTags: ["Genre"],
    }),
    getCategoryById: builder.query({
      query: (id) => `/${id}`,
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Genre"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Genre"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Genre"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categories;
