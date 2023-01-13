import useCertificate from "../../../../hooks/use-certificate"
import Overlay from "../../../shared/Overlay"
import CertificateImage from "./CertificateImage"

function CertificateOverlay() {
	const certificate = useCertificate()

	const visible = !!certificate.name

	const element = (
		<Overlay
			children={
				<CertificateImage
					name={certificate.name}
					address={certificate.address}></CertificateImage>
			}></Overlay>
	)

	return <>{visible && element}</>
}

export default CertificateOverlay
