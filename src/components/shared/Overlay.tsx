import classes from "./Overlay.module.css"

type Props = {
	children: JSX.Element
}

const Overlay: React.FC<Props> = ({ children }) => {
	return <div className={classes.overlay}>{children}</div>
}

export default Overlay
