import { useState } from "react"
import { useDispatch } from "react-redux"
import { overlayActions } from "../store/overlay-slice"

const useCertificateLoaded = () => {
	const [imgLoaded, setLoaded] = useState(false)

	const onLoad = (): void => {
		setLoaded(true)
	}

	const dispatch = useDispatch()

	const hide = (): void => {
		dispatch(overlayActions.hide())
	}

	return { imgLoaded, onLoad, hide }
}

export default useCertificateLoaded
