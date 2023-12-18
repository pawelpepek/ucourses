import classes from "./Avatar.module.css"

export interface AvatarProps {
	name: string
	imgAddress: string
	className?: string
}

function Avatar(props: AvatarProps) {
	return (
		<img
			src={props.imgAddress}
			alt={`${props.name} avatar`}
			className={`ms-auto ${classes.avatar} ${props.className}`}
		/>
	)
}

export default Avatar
