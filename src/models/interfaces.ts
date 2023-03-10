import { CourseSubject, Language } from "./enums"

export interface AuthorCourses {
	author: Author
	courses: Course[]
}

export interface SubjectTime {
	subject: CourseSubject
	hours: number
}

export interface Course {
	id: number
	name: string
	certificate: string
	completed: string
	subjects: SubjectTime[]
	authors: Author[]
	address: string
	homework?: string
}

export interface Author {
	id: number
	name: string
	language: Language
	description: string
	img: string
}

export interface Certificate {
	name: string
	address: string
}
