import { configureStore } from "@reduxjs/toolkit"
import overlayReducer from "./overlay-slice"
import dataReducer from "./data-slice"

const store = configureStore({
	reducer: {
		overlay: overlayReducer,
		data: dataReducer,
	},
})

export default store
