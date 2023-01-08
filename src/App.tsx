import { Fragment } from "react"
import "./App.css"
import CertificateOverlay from "./components/author-card/body/certificate/CertificateOverlay"
import CoursesContainer from "./components/author-card/CoursesContainer"

function App() {
	return (
		<Fragment>
			<CertificateOverlay></CertificateOverlay>
			<div className='container'>
				<h1>Title</h1>
				<br />
				<CoursesContainer></CoursesContainer>
			</div>
		</Fragment>
	)
}

export default App
