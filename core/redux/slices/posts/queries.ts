import { apiSlice } from "@/core/redux/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<any, string>({
      query: (args) => `/products${args ? /category/ + args : ""}`,
    }),
    getPostById: builder.query<any, number>({
      query: (args) => `/products/${args}`,
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
  useGetPostByIdQuery,
} = extendedApiSlice;
