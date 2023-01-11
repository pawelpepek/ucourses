import CoursesStats from "./CoursesStats"

export interface NavbarProps {}

function Navbar(props: NavbarProps) {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top border-bottom border-primary-subtle px-0 my-0'>
			<div className='container text-primary-emphasis '>
				<div className='row w-100'>
					<div className='col'>
						<h1>Udemy Courses</h1>
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
						<img
							src='https://avatars.githubusercontent.com/u/67840037?v=4'
							alt='Paweł Pępek'
							className='avatar ms-auto'
						/>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
