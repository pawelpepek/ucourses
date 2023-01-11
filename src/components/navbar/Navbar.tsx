import { useSelector } from "react-redux"
import StoreType from "../../store/store-types"
import Avatar from "../shared/Avatar"
import ContactPanel from "./ContactPanel"
import CoursesStats from "./CoursesStats"
import "./Navbar.css"

export interface NavbarProps {}

function Navbar(props: NavbarProps) {
	const certificate = useSelector(
		(state: StoreType) => state.overlay.certificate
	)

	const navbarClassSticky = !certificate.name ? "sticky-top" : ""

	return (
		<nav
			className={`navbar navbar-expand-lg bg-body-tertiary border-bottom border-primary-subtle px-0 my-0 ${navbarClassSticky}`}>
			<div className='container text-dark'>
				<div className='row w-100'>
					<div className='col'>
						<h1>Udemy Courses</h1>
						<ContactPanel></ContactPanel>
					</div>
					<div className='col d-flex text-center m-0 p-0'>
						<CoursesStats></CoursesStats>
					</div>
					<div className='col  d-flex flex-row'>
						<div className='m-auto'>
							<div className='d-flex justify-content-between'>
								<h3 className='card-title'>Paweł Pępek</h3>
							</div>
							<h5 className='w-100'>Web App Developer</h5>
						</div>
						<Avatar
							imgAddress='https://avatars.githubusercontent.com/u/67840037?v=4'
							name='Paweł Pępek'></Avatar>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
