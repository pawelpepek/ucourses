import useCertificateShow from "../../../../hooks/use-certificate-show"
import { Certificate } from "../../../../models/interfaces"
import CertificateIcon from "../../../shared/icons/CertificateIcon"

function CertificateBadge(props: Certificate) {
	const dispatch = useCertificateShow()

	const certificateClick = () => {
		dispatch(props)
	}

	return (
		<a
			aria-label={`Display certificate for ${props.name}`}
			data-tip='Show certificate'
			onClick={certificateClick}
			className='d-flex flex-row-reverse text-primary'>
			<CertificateIcon classesAdd='pointer-icon'></CertificateIcon>
		</a>
	)
}

export default CertificateBadge
