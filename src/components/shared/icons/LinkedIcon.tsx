import { TOOLTIP_ID } from "@shared/Tooltip"
import classes from "./LinkedIcon.module.css"

export interface LinkedIconProps {
	children: React.ReactElement
	href: string
	addedClasses?: string
	ariaLabel: string
	tooltip?: string
}

function LinkedIcon(props: LinkedIconProps) {
	return (
		<a
			target='_blank'
			aria-label={props.ariaLabel}
			data-tooltip-id={TOOLTIP_ID}
			data-tooltip-content={props.tooltip ?? props.ariaLabel}
			className={`pointer-icon ${props.addedClasses} text-dark ${classes.icon}`}
			href={props.href}>
			{props.children}
		</a>
	)
}

export default LinkedIcon
