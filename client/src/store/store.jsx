import { configureStore } from "@reduxjs/toolkit";
import { categories } from "./service/categoryService";
import { albums } from "./service/albumService";
import { users } from "./service/userService";

export const store = configureStore({
  reducer: {
    [categories.reducerPath]: categories.reducer,
    [albums.reducerPath]: albums.reducer,
    [users.reducerPath]: users.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categories.middleware)
      .concat(albums.middleware)
      .concat(users.middleware),
});
