import { useSelector } from "react-redux"
import StoreType from "../store/store-types"

const useCertificate = () => {
	return useSelector(
		(store: StoreType) => store.overlay.certificate
	)
}

export default useCertificate