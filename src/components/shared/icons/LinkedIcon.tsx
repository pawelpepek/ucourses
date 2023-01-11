import classes from "./LinkedIcon.module.css"

export interface LinkedIconProps {
	children: JSX.Element
	href: string
	addedClasses?: string
}

function LinkedIcon(props: LinkedIconProps) {
    
	return (
		<a
			target='_blank'
			className={`pointer-icon ${props.addedClasses}`}
			href={props.href}>
			{props.children}
		</a>
	)
}

export default LinkedIcon
