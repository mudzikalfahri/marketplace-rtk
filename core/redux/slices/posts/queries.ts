import { apiSlice } from "@/core/redux/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<any, any>({
      query: (args) => `/products${args ? /category/ + args : ""}`,
      providesTags: ["Post"],
    }),
    getCategories: builder.query<any, void>({
      query: () => "/products/categories ",
      providesTags: ["Post"],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useGetCategoriesQuery,
  useLazyGetPostsQuery,
} = extendedApiSlice;
