import { Author } from "../../../models"
import "./AuthorHeader.css"
import Flag from "./Flag"

export interface AuthorHeaderProps {
	author: Author
}

function AuthorHeader(props: AuthorHeaderProps) {
	const author = props.author
	return (
		<div className='card-header d-flex border-bottom text-primary-emphasis bg-primary-subtle border-primary-subtle'>
			<div className='mt-auto mb-auto me-2'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{author.name}</h5>
				</div>
				<h6 className='w-100'>{author.description}</h6>
			</div>
			<img src={author.img} alt={author.name} className='avatar ms-auto' />
			<Flag language={author.language}></Flag>
		</div>
	)
}

export default AuthorHeader
