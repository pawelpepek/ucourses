import { Fragment } from "react"
import "./App.css"
import CertificateOverlay from "./components/authors-cards/card-body/certificate/CertificateOverlay"
import CoursesContainer from "./components/authors-cards/CoursesContainer"
import Navbar from "./components/navbar/Navbar"
import Tooltip from "./components/shared/Tooltip"

function App() {
	return (
		<Fragment>
			<Navbar></Navbar>
			<CoursesContainer></CoursesContainer>
			<Tooltip></Tooltip>
			<CertificateOverlay></CertificateOverlay>
		</Fragment>
	)
}

export default App
