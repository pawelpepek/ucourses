import { useState } from "react"
import "./Certificate.css"

export interface CertificateProps {
	address: string
	name: string
}

function Certificate(props: CertificateProps) {
	const [imgLoaded, setLoaded] = useState(false)

	const onLoad = () => {
		console.log("koniec")
		setLoaded(true)
	}

	const getClassForImg = () => {
		return `certificate ${imgLoaded ? "" : "certificate-hide"}`
	}

	return (
		<div className='container h-100'>
			<div className='row h-100'>
				<div className='col h-100 d-flex align-items-center justify-content-center'>
					{!imgLoaded && <div className='spinner'></div>}
					<img
						onLoad={onLoad}
						className={getClassForImg()}
						src={props.address}
						alt={props.name}
					/>
				</div>
			</div>
		</div>
	)
}

export default Certificate
