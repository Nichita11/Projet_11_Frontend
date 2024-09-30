import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./cerateAppSliceV2"

export const storeV2 = configureStore({
  reducer: {
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeV2.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeV2.dispatch
