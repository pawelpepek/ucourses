import useCertificateShow from "../../../../hooks/use-certificate-show"
import { Certificate } from "../../../../models/interfaces"
import CertificateIcon from "../../../shared/icons/CertificateIcon"
import classes from "./CertificateBadge.module.css"

function CertificateBadge(props: Certificate) {
	const dispatch = useCertificateShow()

	const certificateClick = () => {
		dispatch(props)
	}

	return (
		<button
			data-tip='Show certificate'
			onClick={certificateClick}
			className={`d-flex flex-row-reverse text-primary border border-0 m-0 p-0 ${classes["certificate-button"]} d-print-none`}>
			<CertificateIcon classesAdd='pointer-icon'></CertificateIcon>
		</button>
	)
}

export default CertificateBadge
