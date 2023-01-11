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
		<table className='w-100 h-100 m-0 p-0 text-primary-emphasis'>
			<tbody>
				<tr>
					<td className='w-50'>
						<CertificateIcon
							classesAdd={classes["icon-tabler-certificate"]}></CertificateIcon>
					</td>
					<td className='w-50'>
						<ClockIcon classesAdd={classes["icon-tabler-clock"]}></ClockIcon>
					</td>
				</tr>
				<tr>
					<td className='w-50'>
						<p className='h3 m-0 p-0 mt-auto'>{coursesCount}</p>
					</td>
					<td className='w-50'>
						<p className='h3 m-0 p-0 mt-auto'>{hours}h</p>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default CoursesStats
