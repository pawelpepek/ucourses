import { Fragment } from "react"
import "./App.css"
import CertificateOverlay from "./components/author-card/body/certificate/CertificateOverlay"
import CoursesContainer from "./components/author-card/CoursesContainer"
import Tooltip from "./components/shared/Tooltip"

function App() {
	return (
		<Fragment>
			<CertificateOverlay></CertificateOverlay>
			<div className='container'>
				<h1>Title</h1>
				<br />
				<CoursesContainer></CoursesContainer>
			</div>
			<Tooltip></Tooltip>
		</Fragment>
	)
}

export default App
