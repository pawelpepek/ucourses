import { Course } from "../../../models"
import CerrtificateBadge from "./CertificateBadge"

export interface CourseRowProps {
	course: Course
}

function CourseRow(props: CourseRowProps) {
	const hours = props.course.subjects.reduce((result, s) => result + s.hours, 0)

	return (
		<li className='list-group-item d-flex justify-content-between align-items-start'>
			<div className='ms-2 me-auto'>
				<div className='fw-bold'>{props.course.name}</div>
			</div>
			<div>
				<CerrtificateBadge
					hours={hours}
					certificate={props.course.certificate}
					name={props.course.name}></CerrtificateBadge>
			</div>
		</li>
	)
}

export default CourseRow
