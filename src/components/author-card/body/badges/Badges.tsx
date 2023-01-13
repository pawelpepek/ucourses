import CerrtificateBadge from "./CertificateBadge"
import HomeworkBadge from "./HomeworkBadge"
import TimeBadge from "./TimeBadge"
import "./Badges.css"

export interface BadgesProps {
	hours: number
	certificate: string
	name: string
	homework?: string
}

function Badges(props: BadgesProps) {
	return (
		<div className='ms-1'>
			<div className='d-flex flex-row-reverse'>
				<TimeBadge hours={props.hours}></TimeBadge>
			</div>
			<div className='d-flex flex-row-reverse'>
				<CerrtificateBadge
					address={props.certificate}
					name={props.name}></CerrtificateBadge>
				{!!props.homework && (
					<HomeworkBadge address={props.homework}></HomeworkBadge>
				)}
			</div>
		</div>
	)
}

export default Badges
