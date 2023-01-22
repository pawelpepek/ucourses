import useAuthorsCourses from "../../hooks/use-authors-courses"
import { Course } from "../../models"
import AuthorCard from "./AuthorCard"
import classes from "./CoursesContainer.module.css"

export interface CoursesContainerProps {}

function CoursesContainer(props: CoursesContainerProps) {
	const authorsCourses = useAuthorsCourses()

	const cardId = (id: number) => `card_${id}`

	const cardCol = (courses: Course[]) => {
		return courses.length > 0 ? (
			<div className='col' key={cardId(courses[0].authors[0].id)}>
				<AuthorCard courses={courses}></AuthorCard>
			</div>
		) : null
	}

	const cards = () => {
		return authorsCourses.map(ac => cardCol(ac.courses))
	}

	return (
		<div className={`container my-3 ${classes.courses}`}>
			<div className='row row-cols-1 row-cols-xl-3 row-cols-md-2 g-4'>
				{cards()}
			</div>
		</div>
	)
}

export default CoursesContainer
