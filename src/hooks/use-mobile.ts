import { useEffect, useState } from "react"

function useMobile() {
	const [windowWidth, setWindowWidth] = useState(0)
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener("resize", handleResize)
		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])
	return windowWidth <= 768
}

export default useMobile
