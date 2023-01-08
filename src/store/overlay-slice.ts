import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	certificate: {
		name: "",
		address: "",
	},
}

const overlaySlice = createSlice({
	name: "overlay",
	initialState,
	reducers: {
		show(state, actions) {
			state.certificate = actions.payload
		},
		hide(state) {
			state.certificate = { name: "", address: "" }
		},
	},
})

export const overlayActions = overlaySlice.actions

export default overlaySlice.reducer
