import { Tooltip as ReactTooltip } from "react-tooltip"
import useMobile from "../../hooks/use-mobile"
import "./Tooltip.css"

export const TOOLTIP_ID = "main-tooltip"

const Tooltip: React.FC = () => {
	const isMobile = useMobile()
	return (
		<>
			{!isMobile && (
				<ReactTooltip
					id={TOOLTIP_ID}
					place='left'
					style={{ backgroundColor: "white", color: "black" }}
					border='1px solid black'
					delayShow={200}
					className='app-tooltip d-print-none'
				/>
			)}
		</>
	)
}

export default Tooltip
