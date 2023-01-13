import classes from "./TimeBadge.module.css"

function TimeBadge(props: { hours: number }) {
	return (
		<span className={`badge bg-primary rounded-pill hours ${classes.printed}`}>
			{props.hours}h
		</span>
	)
}

export default TimeBadge
