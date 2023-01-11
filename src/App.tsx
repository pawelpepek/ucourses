import { Fragment } from "react"
import "./App.css"
import CertificateOverlay from "./components/author-card/body/certificate/CertificateOverlay"
import CoursesContainer from "./components/author-card/CoursesContainer"
import Navbar from "./components/navbar/Navbar"
import Tooltip from "./components/shared/Tooltip"

function App() {
	return (
		<Fragment>
			<CertificateOverlay></CertificateOverlay>
			<Navbar></Navbar>
			<div className='container my-3'>
				<CoursesContainer></CoursesContainer>
			</div>
			<Tooltip></Tooltip>
		</Fragment>
	)
}

export default App
