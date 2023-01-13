import { useDispatch } from "react-redux"
import { Certificate } from "../models/interfaces"
import { overlayActions } from "../store/overlay-slice"

const useCertificateShow = () => {
	const dispatch = useDispatch()

	return (certificate: Certificate) => {
		dispatch(
			overlayActions.show({
				address: certificate.address,
				name: certificate.name,
			})
		)
	}
}

export default useCertificateShow
