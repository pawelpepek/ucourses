import ReactTooltip from "react-tooltip"
import "./Tooltip.css"

const Tooltip: React.FC = () => {
	return (
		<ReactTooltip
			type={"info"}
			backgroundColor='#0D6EFD'
			borderColor='#0D6EFD'
			border={true}
			textColor='white'
			delayShow={200}
			multiline={true}
			data-effect='solid'
			data-place='left'
		/>
	)
}

export default Tooltip
