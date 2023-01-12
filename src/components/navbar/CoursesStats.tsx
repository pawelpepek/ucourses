import { CoursesCollection } from "../../models/CoursesCollection"
import CertificateIcon from "../shared/icons/CertificateIcon"
import ClockIcon from "../shared/icons/ClockIcon"
import classes from "./CoursesStats.module.css"

function CoursesStats() {
	const courses = CoursesCollection.instance.courses
	const hours = courses
		.flatMap(c => c.subjects)
		.map(s => s.hours)
		.reduce((partialSum, x) => partialSum + x, 0)
	const coursesCount = courses.length

	return (
		<div className={`w-100 h-100 d-flex justify-content-around pb-2`}>
			<div className='d-flex flex-column'>
				<CertificateIcon
					classesAdd={classes["icon-tabler-certificate"]}></CertificateIcon>
				<p className='h3 m-0 p-0 mt-auto'>{coursesCount}</p>
			</div>
			<div className='d-flex flex-column'>
				<ClockIcon classesAdd={classes["icon-tabler-clock"]}></ClockIcon>
				<p className='h3 m-0 p-0 mt-auto'>{hours}h</p>
			</div>
		</div>
	)
}

export default CoursesStats
