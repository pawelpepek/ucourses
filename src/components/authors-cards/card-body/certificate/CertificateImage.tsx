import useCertificateLoaded from "../../../../hooks/use-certificate-loaded"
import { Certificate } from "../../../../models/interfaces"
import ButtonClose from "../../../shared/ButtonClose"
import LoaidingSpinner from "../../../shared/LoadingSpinner"
import classes from "./CertificateImage.module.css"

function CertificateImage(props: Certificate) {
	const { imgLoaded, onLoad, hide } = useCertificateLoaded()

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
							click={hide}
							classAdded={`${classes["button-certificate-close"]} ${
								imgLoaded ? "" : classes["certificate-hide"]
							}`}></ButtonClose>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CertificateImage
