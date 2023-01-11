import classes from "./ButtonClose.module.css"

function ButtonClose(props: { click: () => void; classAdded?: string }) {
	return (
		<button
			onClick={props.click}
			type='button'
			className={`btn btn-outline-primary ${classes["button-close"]} p-0 border ${props.classAdded}`}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='32'
				height='32'
				strokeWidth='0.5'
				fill='currentColor'
				className='bi bi-x'
				viewBox='0 0 32 32'>
				<g transform='scale (2 2)'>
					<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
				</g>
			</svg>
		</button>
	)
}

export default ButtonClose
