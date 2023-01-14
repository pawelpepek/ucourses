import ReactTooltip from "react-tooltip"
import useMobile from "../../hooks/use-mobile"
import "./Tooltip.css"

const Tooltip: React.FC = () => {
	const isMobile = useMobile()
	return (
		<>
			{!isMobile && (
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
					className='tooltip d-print-none'
				/>
			)}
		</>
	)
}

export default Tooltip
