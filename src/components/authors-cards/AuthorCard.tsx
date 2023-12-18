import { Author, Course } from "../../models"
import AuthorHeader from "./card-header/AuthorHeader"
import CoursesList from "./card-body/CoursesList"
import useTimerSwitch from "../../hooks/use-timer-switch"

export interface AuthorCardProps {
	courses: Course[]
}

function AuthorCard(props: AuthorCardProps) {
	const authors: Author[] = []

	props.courses.forEach(course => {
		course.authors.forEach(author => {
			if (!authors.some(a => a.id === author.id)) {
				authors.push(author)
			}
		})
	})

	const visibleAuthorIndex = useTimerSwitch(authors.length, 5000)

	return (
		<div className='card border border-primary-subtle h-100 w-100'>
			<AuthorHeader
				visibleIndex={visibleAuthorIndex}
				authors={authors}></AuthorHeader>
			<CoursesList
				visibleAuthorId={authors[visibleAuthorIndex].id}
				courses={props.courses}></CoursesList>
		</div>
	)
}

export default AuthorCard
