import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleAPi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleAPi;
