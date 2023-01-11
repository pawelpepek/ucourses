import ReactTooltip from "react-tooltip"
import "./Tooltip.css"

const Tooltip: React.FC = () => {
	return (
		<ReactTooltip
			type={"info"}
			backgroundColor='white'
			border={true}
			textColor='black'
			delayShow={200}
			multiline={true}
			data-effect='solid'
			data-place='left'
			effect='solid'
			className='yourClass'
		/>
	)
}

export default Tooltip
