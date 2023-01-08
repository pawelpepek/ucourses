

function TimeBadge(props: { hours: number }) {
	return (
		<span className='badge bg-primary rounded-pill hours'>{props.hours}h</span>
	)
}

export default TimeBadge
