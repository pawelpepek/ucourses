import useStats from "../../hooks/use-stats"
import CertificateIcon from "../shared/icons/CertificateIcon"
import ClockIcon from "../shared/icons/ClockIcon"
import classes from "./CoursesStats.module.css"

function CoursesStats() {
	const [hours, coursesCount] = useStats()

	return (
		<div className={`w-100 h-100 d-flex justify-content-around pb-2`}>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<CertificateIcon
					classesAdd={classes["icon-tabler-certificate"]}></CertificateIcon>
				<p className={`h3 m-0 p-0 mt-auto ${classes.number}`}>{coursesCount}</p>
			</div>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<ClockIcon classesAdd={classes["icon-tabler-clock"]}></ClockIcon>
				<p className={`h3 m-0 p-0 mt-auto ${classes.number}`}>{hours}h</p>
			</div>
		</div>
	)
}

export default CoursesStats
