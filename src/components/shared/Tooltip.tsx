import ReactTooltip from "react-tooltip"
import "./Tooltip.css"

const Tooltip: React.FC = () => {
	return (
		<ReactTooltip
			type={"info"}
			backgroundColor='#DEE2E6'
			border={true}
			textColor='#0A58CA'
			delayShow={200}
			multiline={true}
			data-effect='solid'
			data-place='left'
			effect='solid'
			className="yourClass"
		/>
	)
}

export default Tooltip
