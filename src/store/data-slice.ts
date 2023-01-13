import { CoursesCollection } from "../models/CoursesCollection"
import { createSlice } from "@reduxjs/toolkit"
import { AuthorCourses, Course } from "../models"

const initialState: {
	courses: Course[]
	authorsCourses: AuthorCourses[]
} = {
	courses: CoursesCollection.instance.courses,
	authorsCourses: CoursesCollection.instance.authorsCourses,
}

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
})

export const overlayActions = dataSlice.actions

export default dataSlice.reducer
