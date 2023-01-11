import { useDispatch } from "react-redux"
import { overlayActions } from "../../../../store/overlay-slice"
import CertificateIcon from "../../../shared/icons/CertificateIcon"

export interface CerrtificateBadgeProps {
	certificate: string
	name: string
}

function CerrtificateBadge(props: CerrtificateBadgeProps) {
	const dispatch = useDispatch()

	const certificateClick = () => {
		dispatch(
			overlayActions.show({ address: props.certificate, name: props.name })
		)
	}

	return (
		<div
			data-tip='Show certificate'
			onClick={certificateClick}
			className='d-flex flex-row-reverse text-primary'>
			<CertificateIcon></CertificateIcon>
		</div>
	)
}

export default CerrtificateBadge
