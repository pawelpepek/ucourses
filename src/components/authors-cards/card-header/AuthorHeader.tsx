import { Author } from "../../../models"
import Avatar from "../../shared/Avatar"
import Flag from "./Flag"
import "./AuthorHeader.css"

export interface AuthorHeaderProps {
	authors: Author[]
	visibleIndex: number
}

function AuthorHeader(props: AuthorHeaderProps) {
	const authors = props.authors

	const lastVisibleIndex = (index: number) =>
		index === 0 ? props.authors.length - 1 : index - 1

	const classForIndex = (index: number) => {
		switch (index) {
			case -1:
			case -2:
				return "author-visible-allways"
			case props.visibleIndex:
				return "author-visible"
			case lastVisibleIndex(props.visibleIndex):
				return "author-new-hidden"
			default:
				return "author-hidden"
		}
	}
	const classForDescription = (index: number) =>
		`mt-auto mb-auto me-2 d-flex flex-column author-desc ${classForIndex(
			index
		)}`

	const oneHeader = (author: Author, index: number, className: string) => {
		return (
			<div
				className={`d-flex me-1 w-100 flex-row card-header-next justify-content-start ${className}`}
				key={index}>
				<div className={classForDescription(index)}>
					<h5>{author.name}</h5>
					<h6 className='w-100'>{author.description}</h6>
				</div>
				<Avatar
					className={classForIndex(index)}
					imgAddress={author.img}
					name={author.name}></Avatar>
			</div>
		)
	}

	const headers = () =>
		authors.length == 1
			? oneHeader(authors[0], -1, "no-print-author")
			: authors.map((a, i) => oneHeader(a, i, "no-print-author"))

	return (
		<div className='card-header border-bottom d-flex border-primary-subtle text-dark w-100 bg-primary-subtle'>
			{oneHeader(authors[0], -2, "print-header")}
			{headers()}
			<Flag language={authors[0].language}></Flag>
		</div>
	)
}

export default AuthorHeader
