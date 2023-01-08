import { Course } from "../../../models"
import Badges from "./badges/Badges"
import "./CourseRow.css"

export interface CourseRowProps {
	course: Course
}

function CourseRow(props: CourseRowProps) {
	const hours = props.course.subjects.reduce((result, s) => result + s.hours, 0)

	return (
		<li className='list-group-item d-flex justify-content-between align-items-start'>
			<div className='ms-2 me-auto'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href={props.course.address}
					className='fw-bold course-row'>
					{props.course.name}
				</a>
			</div>
			<Badges
				hours={hours}
				certificate={props.course.certificate}
				name={props.course.name}
				homework={props.course.homework}></Badges>
		</li>
	)
}

export default CourseRow
