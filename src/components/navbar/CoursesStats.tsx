import CertificateIcon from "../shared/icons/CertificateIcon"
import ClockIcon from "../shared/icons/ClockIcon"
import classes from "./CoursesStats.module.css"
import { NavbarProps } from "./Navbar"

function CoursesStats(props: NavbarProps) {
	return (
		<table className='w-100 h-100 m-0 p-0'>
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
						<p className='h3 m-0 p-0 mt-auto'>15</p>
					</td>
					<td className='w-50'>
						<p className='h3 m-0 p-0 mt-auto'>200.5h</p>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default CoursesStats
