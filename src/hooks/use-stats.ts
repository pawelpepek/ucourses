import { useSelector } from "react-redux"
import StoreType from "../store/store-types"

const useStats = () => {
    const courses = useSelector((state: StoreType) => state.data.courses)
	const hours = courses
		.flatMap(c => c.subjects)
		.map(s => s.hours)
		.reduce((partialSum, x) => partialSum + x, 0)
	const coursesCount = courses.length

    return [hours, coursesCount]
}

export default useStats