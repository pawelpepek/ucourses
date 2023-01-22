import LinkedIcon from "../shared/icons/LinkedIcon"
import CodeIcon from "./icons/CodeIcon"
import GithubIcon from "./icons/GithubIcon"
import MailIcon from "./icons/MailIcon"
import MapIcon from "./icons/MapIcon"

function ContactPanel() {
	return (
		<>
			<div className='container d-flex flex-row justify-content-start mx-0 px-0 d-print-none'>
				<LinkedIcon
					href='mailto:pawel.pepek@gmail.com'
					ariaLabel='Mail to Paweł Pępek'>
					<MailIcon></MailIcon>
				</LinkedIcon>
				<LinkedIcon
					href='https://github.com/pawelpepek'
					ariaLabel='Personal GitHub repository address'
					tooltip='Personal GitHub repository'
					addedClasses='ms-1'>
					<GithubIcon></GithubIcon>
				</LinkedIcon>
				<LinkedIcon
					href='https://graniowki.web.app'
					addedClasses='ms-1'
					ariaLabel='Graniówki website address'
					tooltip='Graniówki website'>
					<MapIcon></MapIcon>
				</LinkedIcon>
				<LinkedIcon
					href='https://github.com/pawelpepek/ucourses'
					addedClasses='ms-1'
					ariaLabel='Source code'>
					<CodeIcon></CodeIcon>
				</LinkedIcon>
			</div>
			<div className='d-none d-print-flex flex-column'>
				<a
					className='py-0 my-0 text-decoration-none text-dark'
					href='pawel.pepek@gmail.com'>
					pawel.pepek@gmail.com
				</a>
				<a
					className='py-0 my-0 text-decoration-none text-dark'
					href='https://github.com/pawelpepek'>
					https://github.com/pawelpepek
				</a>
				<a
					className='py-0 my-0 text-decoration-none text-dark'
					href='https://graniowki.web.app'>
					https://graniowki.web.app
				</a>
			</div>
		</>
	)
}

export default ContactPanel
