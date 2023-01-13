import useCertificateShow from "../../../../hooks/use-certificate-show"
import { Certificate } from "../../../../models/interfaces"
import CertificateIcon from "../../../shared/icons/CertificateIcon"

function CerrtificateBadge(props: Certificate) {
	const dispatch = useCertificateShow()

	const certificateClick = () => {
		dispatch(props)
	}

	return (
		<div
			data-tip='Show certificate'
			onClick={certificateClick}
			className='d-flex flex-row-reverse text-primary'>
			<CertificateIcon classesAdd='pointer-icon'></CertificateIcon>
		</div>
	)
}

export default CerrtificateBadge
