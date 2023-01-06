import { Course } from "../../../models"
import CourseRow from "./CourseRow"

export interface CoursesListProps {
	courses: Course[]
}

function CoursesList(props: CoursesListProps) {
	const rowId = (id: number) => `cRow_${id}`

	const coursesRows = () =>
		props.courses.map(c => <CourseRow key={rowId(c.id)} course={c}></CourseRow>)
	return (
		<div className='card-body'>
			<ol className='list-group list-group-numbered'>{coursesRows()}</ol>
		</div>
	)
}

export default CoursesList
