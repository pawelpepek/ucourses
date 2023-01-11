function ClockIcon(props: { classesAdd?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`icon icon-tabler text-primary ${props.classesAdd}`}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			strokeWidth='1.7'
			stroke='currentColor'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<circle stroke='white' fill='white' cx='12' cy='12' r='8' />
			<circle stroke='black' cx='12' cy='12' r='9' />
			<polyline points='12 7 12 12 15 15' />
		</svg>
	)
}

export default ClockIcon
