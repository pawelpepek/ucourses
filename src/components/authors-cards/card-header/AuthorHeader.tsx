import { Author } from "../../../models"
import Avatar from "../../shared/Avatar"
import Flag from "./Flag"
import "./AuthorHeader.css"

export interface AuthorHeaderProps {
	authors: Author[]
}

function AuthorHeader(props: AuthorHeaderProps) {
	const authors = props.authors

	const classForAuthor = (index: number) => {
		const cardClass =
			"card-header border-bottom d-flex bg-primary-subtle border-primary-subtle text-dark w-100"

		if (authors.length === 1) {
			return cardClass
		} else {
			const authorClass = cardClass + " author-" + (index + 1)
			return index == 0 ? authorClass : authorClass + " card-header-next"
		}
	}

	const oneHeader = (author: Author, index: number) => {
		return (
			<div className={classForAuthor(index)}>
				<div className='mt-auto mb-auto me-2'>
					<div className='d-flex justify-content-between'>
						<h5>{author.name}</h5>
					</div>
					<h6 className='w-100'>{author.description}</h6>
				</div>
				<Avatar imgAddress={author.img} name={author.name}></Avatar>
				<Flag language={author.language}></Flag>
			</div>
		)
	}

	const headers = () =>
		authors.length == 1
			? oneHeader(authors[0], 0)
			: authors.map((a, i) => oneHeader(a, i))

	return <>{headers()}</>
}

export default AuthorHeader
