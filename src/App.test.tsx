import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"

test("renders without crashing", () => {
	expect(() =>
		render(
			<Provider store={store}>
				<App />
			</Provider>
		)
	).not.toThrow()
})
