import classes from "./LinkedIcon.module.css"

export interface LinkedIconProps {
	children: JSX.Element
	href: string
	addedClasses?: string
	ariaLabel: string
}

function LinkedIcon(props: LinkedIconProps) {
	return (
		<a
			target='_blank'
			aria-label={props.ariaLabel}
			data-tip={props.ariaLabel}
			className={`pointer-icon ${props.addedClasses} text-dark ${classes.icon}`}
			href={props.href}>
			{props.children}
		</a>
	)
}

export default LinkedIcon
