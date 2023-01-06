import { Author, AuthorCourses, Course } from "./interfaces"
import { getAuthors, getCourses } from "./courses"

export class CoursesCollection {
	private readonly allCourses: Course[]
	private readonly allAuthors: Author[]
	private readonly allAuthorsCourses: AuthorCourses[]

	private static classInsance: CoursesCollection | undefined = undefined

	public get courses(): Course[] {
		return this.allCourses
	}

	public get authors(): Author[] {
		return this.allAuthors
	}

	public get authorsCourses(): AuthorCourses[] {
		return this.allAuthorsCourses
	}

	public static get instance() {
		if (!this.classInsance) {
			this.classInsance = new CoursesCollection()
		}
		return this.classInsance
	}

	private constructor() {
		this.allAuthors = getAuthors()
		this.allCourses = getCourses()
		this.allAuthorsCourses = this.getAuthorsCourses()
	}

	private authorCourses(author: Author): Course[] {
		const courses = this.allCourses.filter(c => c.authors[0].id === author.id)

		courses.sort((a, b) => (a.completed > b.completed ? 1 : -1))

		return courses
	}

	private getAuthorsCourses(): AuthorCourses[] {
		const grouped = this.allAuthors.map(a => {
			return { author: a, courses: this.authorCourses(a) }
		})

		grouped.sort((a, b) => (a.courses.length > b.courses.length ? -1 : 1))

		return grouped
	}
}
