import { useSelector } from "react-redux"
import StoreType from "../../../../store/store-types"
import Overlay from "../../../shared/Overlay"
import Certificate from "./Certificate"

function CertificateOverlay() {
	const certificate = useSelector(
		(state: StoreType) => state.overlay.certificate
	)

	const visible = !!certificate.name

	const element = (
		<Overlay
			children={
				<Certificate
					name={certificate.name}
					address={certificate.address}></Certificate>
			}></Overlay>
	)

	return <>{visible && element}</>
}

export default CertificateOverlay
