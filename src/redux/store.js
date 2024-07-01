import { configureStore } from '@reduxjs/toolkit'
import todoReduser from "./slice/todo"




export const store = configureStore({
  reducer: {
     todo : todoReduser
  },
})