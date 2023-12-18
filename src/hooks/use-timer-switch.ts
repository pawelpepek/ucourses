import { useEffect, useState } from "react"

function useTimerSwitch(count: number, interval: number) {
	const [visibleIndex, setVisibleIndex] = useState(0)

	useEffect(() => {
		if (count > 0)
			setInterval(() => {
				setVisibleIndex(last => (last + 1) % count)
			}, interval)
	}, [])
	return visibleIndex
}

export default useTimerSwitch
