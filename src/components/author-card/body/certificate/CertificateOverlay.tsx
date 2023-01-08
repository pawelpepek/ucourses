import { useDispatch, useSelector } from "react-redux"
import { overlayActions } from "../../../../store/overlay-slice"
import StoreType from "../../../../store/store-types"
import Overlay from "../../../shared/Overlay"
import Certificate from "./Certificate"

function CertificateOverlay() {
	const certificate = useSelector(
		(state: StoreType) => state.overlay.certificate
	)

	const visible = !!certificate.name

	const dispatch = useDispatch()

	const onclick = () => {
		dispatch(overlayActions.hide())
	}

	const element = (
		<Overlay
			click={onclick}
			children={
				<Certificate
					name={certificate.name}
					address={certificate.address}></Certificate>
			}></Overlay>
	)

	return <>{visible && element}</>
}

export default CertificateOverlay
