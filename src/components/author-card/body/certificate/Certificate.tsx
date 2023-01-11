import { useState } from "react"
import { useDispatch } from "react-redux"
import { overlayActions } from "../../../../store/overlay-slice"
import ButtonClose from "../../../shared/ButtonClose"
import LoaidingSpinner from "../../../shared/LoadingSpinner"
import classes from "./Certificate.module.css"

export interface CertificateProps {
	address: string
	name: string
}

function Certificate(props: CertificateProps) {
	const [imgLoaded, setLoaded] = useState(false)

	const onLoad = () => {
		setLoaded(true)
	}

	const dispatch = useDispatch()

	const onclick = () => {
		dispatch(overlayActions.hide())
	}

	const getClassForImg = () => {
		return `${classes.certificate} ${
			imgLoaded ? "" : classes["certificate-hide"]
		}`
	}

	return (
		<div className='container h-100'>
			<div className='row h-100'>
				<div className='col h-100 d-flex align-items-center justify-content-center'>
					{!imgLoaded && <LoaidingSpinner></LoaidingSpinner>}
					<div className={classes["img-container"]}>
						<img
							onLoad={onLoad}
							className={getClassForImg()}
							src={props.address}
							alt={props.name}
						/>
						<ButtonClose
							click={onclick}
							classAdded={`${classes["button-certificate-close"]} ${
								imgLoaded ? "" : classes["certificate-hide"]
							}`}></ButtonClose>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Certificate
