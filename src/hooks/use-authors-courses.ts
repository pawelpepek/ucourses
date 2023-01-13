import { useSelector } from "react-redux"
import StoreType from "../store/store-types"

const useAuthorsCourses = () => {
	return useSelector(
		(store: StoreType) => store.data.authorsCourses
	)
}

export default useAuthorsCourses