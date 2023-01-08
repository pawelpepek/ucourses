import classes from "./Overlay.module.css"

type Props = {
	children: JSX.Element
	click: () => void
}

const Overlay: React.FC<Props> = ({ children, click }) => {
	return (
		<div onClick={click} className={classes.overlay}>
			{children}
		</div>
	)
}

export default Overlay
