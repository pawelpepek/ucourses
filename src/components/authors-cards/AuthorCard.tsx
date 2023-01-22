import { Course } from "../../models"
import AuthorHeader from "./card-header/AuthorHeader"
import CoursesList from "./card-body/CoursesList"

export interface AuthorCardProps {
	courses: Course[]
}

function AuthorCard(props: AuthorCardProps) {
	const author = props.courses[0].authors[0]

	return (
		<div className='card border border-primary-subtle h-100 w-100'>
			<AuthorHeader author={author}></AuthorHeader>
			<CoursesList courses={props.courses}></CoursesList>
		</div>
	)
}

export default AuthorCard
