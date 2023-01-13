import { AuthorCourses, Course } from "../models"

interface StoreType {
	overlay: {
		certificate: {
			name: string
			address: string
		}
	}
	data: {
		courses: Course[]
		authorsCourses: AuthorCourses[]
	}
}

export default StoreType
