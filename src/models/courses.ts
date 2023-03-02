import { Author, Course } from "./interfaces"
import { CourseSubject, Language } from "./enums"

export function getCourses(): Course[] {
	const authors = getAuthors()

	return [
		{
			id: 0,
			name: "SOLID, Wzorce Projektowe w C# (.NET) - praktyczny przewodnik",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-ca1d6c23-fa1e-4f1d-abe4-4793cfd5c487.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 6 }],
			authors: [authors[0]],
			completed: "2021-10-04",
			address:
				"https://www.udemy.com/course/solid-wzorce-projektowe-w-c-sharp-net-praktyczny-przewodnik",
		},
		{
			id: 1,
			name: "SQL Server - zapytania. Querying",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-6c915b21-6118-408c-ba08-6dcaeb1a2bcb.jpg",
			subjects: [{ subject: CourseSubject.Database, hours: 5.5 }],
			authors: [authors[1]],
			completed: "2021-10-08",
			address:
				"https://www.udemy.com/course/sql-server-zapytania-querying-exam-70-461",
		},
		{
			id: 2,
			name: "GIT od podstaw dla każdego",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-eb160234-366c-4ece-afcd-9f5c2a59e96b.jpg",
			completed: "2021-10-14",
			subjects: [{ subject: CourseSubject.Other, hours: 5.5 }],
			authors: [authors[2]],
			address: "https://www.udemy.com/course/git-od-podstaw-dla-kazdego",
		},
		{
			id: 3,
			name: "Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#)",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-74bf9cef-483a-4d26-9593-5039e9120357.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 8.5 }],
			authors: [authors[0]],
			address:
				"https://www.udemy.com/course/praktyczny-kurs-aspnet-core-rest-web-api-od-podstaw",
			completed: "2021-11-04",
		},
		{
			id: 4,
			name: "C# .NET: Testy jednostkowe i integracyjne + praktyka",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-298a7e1a-9274-4e82-9500-e5a58cca9573.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 6 }],
			authors: [authors[0]],
			completed: "2021-11-10",
			address:
				"https://www.udemy.com/course/c-net-testy-jednostkowe-i-integracyjne",
			homework:
				"https://www.dropbox.com/sh/8nlnsb0dkbwpyb4/AADnMhU1b6OP5Aw_pbx0QttBa?dl=0",
		},
		{
			id: 5,
			name: "Kurs Tworzenia Stron WWW cz. I - HTML, CSS, RWD",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-2b6d1076-566f-4563-b8ee-1ddc9e044974.jpg",
			subjects: [{ subject: CourseSubject.Frontend, hours: 10 }],
			completed: "2021-11-17",
			authors: [authors[3]],
			address:
				"https://www.udemy.com/course/od-zera-do-front-end-developera-cz1",
		},
		{
			id: 6,
			name: "Single-Page Application with ASP.NET & jQuery Hands-On",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-ccf9e6ff-3265-4082-94aa-5b8a5e63cc01.jpg",
			subjects: [
				{ subject: CourseSubject.Frontend, hours: 1.5 },
				{ subject: CourseSubject.Backend, hours: 2 },
			],
			completed: "2021-11-19",
			authors: [authors[5]],
			address:
				"https://www.udemy.com/course/single-page-application-with-aspnet-jquery-hands-on",
		},
		{
			id: 7,
			name: "JavaScript - Jedyny Kurs, Którego Potrzebujesz!",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-35e50a52-8f7b-46f3-a90a-818aab573973.jpg",
			completed: "2021-11-23",
			authors: [authors[3]],
			subjects: [{ subject: CourseSubject.Frontend, hours: 10.5 }],
			address:
				"https://www.udemy.com/course/javascript-jedyny-kurs-ktorego-potrzebujesz",
		},
		{
			id: 8,
			name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-51ad65cb-57bd-4e52-b7a1-22aabd83e648.jpg",
			completed: "2022-01-12",
			subjects: [{ subject: CourseSubject.Frontend, hours: 48.5 }],
			address:
				"https://www.udemy.com/course/react-the-complete-guide-incl-redux",
			authors: [authors[4]],
		},
		{
			id: 9,
			name: "Kurs Tworzenia Stron WWW cz. II - SASS, JS, Bootstrap",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-e25583bf-a544-43ec-82e3-07473848ee80.jpg",
			subjects: [{ subject: CourseSubject.Frontend, hours: 10 }],
			completed: "2022-04-06",
			authors: [authors[3]],
			address:
				"https://www.udemy.com/course/od-zera-do-front-end-developera-cz2",
		},
		{
			id: 10,
			name: "C# Memory Tricks: Learn How To Master The Garbage Collector",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-469199bb-d7dd-433f-96d9-aeb0a0835b8d.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 3.5 }],
			completed: "2022-05-06",
			authors: [authors[6]],
			address:
				"https://www.udemy.com/course/csharp-memory-tricks-learn-how-to-master-the-garbage-collector",
		},
		{
			id: 11,
			name: "RegEx - Wyrażenia Regularne od A do Z",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-d1b518b2-8c28-4b55-9f8a-da3466925ba4.jpg",
			completed: "2022-07-22",
			subjects: [
				{ subject: CourseSubject.Other, hours: 3 },
				{ subject: CourseSubject.Backend, hours: 1 },
			],
			authors: [authors[2]],
			address:
				"https://www.udemy.com/course/regex-wyrazenia-regularne-od-a-do-z",
		},
		{
			id: 12,
			name: "Angular - The Complete Guide (2022 Edition)",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-59de10b1-c6f2-4b48-985e-7d7489ff5372.jpg",
			completed: "2022-08-09",
			subjects: [{ subject: CourseSubject.Frontend, hours: 34.5 }],
			address: "https://www.udemy.com/course/the-complete-guide-to-angular-2",
			authors: [authors[4]],
		},
		{
			id: 13,
			name: "C# .NET: Entity Framework (Core)+ praktyka",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-50c36c46-4ae4-4303-9475-a09108faa1d6.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 8.5 }],
			authors: [authors[0]],
			completed: "2022-10-08",
			address: "https://www.udemy.com/course/c-net-entity-framework-core",
			homework: "https://github.com/pawelpepek/StackOverflowAPI",
		},
		{
			id: 14,
			name: "SQL dla początkujących - PostgreSQL (z podręcznikiem PDF)",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-f5cb1d0f-4860-403e-a7ea-3059f0643651.jpg",
			subjects: [{ subject: CourseSubject.Database, hours: 6.5 }],
			authors: [authors[1]],
			completed: "2022-11-28",
			address:
				"https://www.udemy.com/course/sql-dla-poczatkujacych-postgresql-z-podrecznikiem-pdf",
		},
		{
			id: 15,
			name: "Typescript: The Complete Developer's Guide",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-3c981a95-9746-4b1d-b4d7-7e3fa6ff772b.jpg",
			completed: "2022-12-28",
			subjects: [{ subject: CourseSubject.Frontend, hours: 24.5 }],
			address:
				"https://www.udemy.com/course/typescript-the-complete-developers-guide",
			authors: [authors[7]],
		},
		{
			id: 16,
			name: "SQL Server - Modyfikacja danych, transakcje i błędy",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-4e63823b-0387-48de-a2f1-599069d6323b.jpg",
			subjects: [{ subject: CourseSubject.Database, hours: 5 }],
			authors: [authors[1]],
			completed: "2023-01-03",
			address:
				"https://www.udemy.com/course/sql-server-modyfikacja-danych-transakcje-oblsuga-bledow",
		},
		{
			id: 17,
			name: "PostgreSQL - Projektowanie baz danych - kurs z podręcznikiem",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-65eab257-909d-47af-abfc-0b01f7f7f3ed.jpg",
			subjects: [{ subject: CourseSubject.Database, hours: 7.5 }],
			authors: [authors[1]],
			completed: "2023-02-09",
			address:
				"https://www.udemy.com/course/postgresql-projektowanie-baz-danych",
		},
		{
			id: 18,
			name: "Write Asynchronous C# Code With Tasks and PLINQ",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-d957311f-ca2b-45aa-8b62-8544df33be85.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 3 }],
			completed: "2023-02-16",
			authors: [authors[6]],
			address:
				"https://www.udemy.com/course/write-asynchronous-csharp-code-with-task-parallel-library-and-plinq/",
		},
		{
			id: 19,
			name: "React Native - The Practical Guide [2023]",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-f352ceed-865b-4125-acf2-4e017e97189c.jpg",
			completed: "2023-02-23",
			subjects: [{ subject: CourseSubject.Frontend, hours: 28.5 }],
			address: "https://www.udemy.com/course/react-native-the-practical-guide",
			authors: [authors[4]],
		},
		{
			id: 20,
			name: "Clean Code",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-e2f8cbb1-6c9f-4cea-b7ea-6143eed69893.jpg",
			completed: "2023-03-02",
			subjects: [
				{ subject: CourseSubject.Frontend, hours: 3 },
				{ subject: CourseSubject.Backend, hours: 3.5 },
			],
			address: "https://www.udemy.com/course/writing-clean-code",
			authors: [authors[4]],
		},
	]
}

export function getAuthors(): Author[] {
	return [
		{
			id: 0,
			language: Language.pln,
			name: "Jakub Kozera",
			description: "Lead .NET Fullstack Developer & Online Teacher",
			img: "https://img-c.udemycdn.com/user/200_H/53382326_1d42_2.jpg",
		},
		{
			id: 1,
			language: Language.pln,
			name: "Rafał Mobilo",
			description: "Microsoft Certified Trainer",
			img: "https://img-c.udemycdn.com/user/200_H/12424254_5bd6_5.jpg",
		},
		{
			id: 2,
			language: Language.pln,
			name: "Adrian Szuszkiewicz",
			description: ".NET Software Developer and Code Mentor",
			img: "https://img-c.udemycdn.com/user/200_H/6750162_8369_2.jpg",
		},
		{
			id: 3,
			language: Language.pln,
			name: "Mateusz Maj",
			description: "Freelancer & Front-End Developer",
			img: "https://img-c.udemycdn.com/user/200_H/47980698_db20_4.jpg",
		},
		{
			id: 4,
			language: Language.eng,
			name: "Maximilian Schwarzmüller",
			description: "AWS certified, Professional Web Developer and Instructor",
			img: "https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg",
		},
		{
			id: 5,
			language: Language.eng,
			name: "Patrick God",
			description: "Passionate Software Developer & Teacher",
			img: "https://img-c.udemycdn.com/user/200_H/22953644_e13b_2.jpg",
		},
		{
			id: 6,
			language: Language.eng,
			name: "Mark Farragher",
			description: "Microsoft Certified Trainer",
			img: "https://img-c.udemycdn.com/user/200_H/8931822_8cb4_7.jpg",
		},
		{
			id: 7,
			language: Language.eng,
			name: "Stephen Grider",
			description: "Engineering Architect",
			img: "https://img-c.udemycdn.com/user/200_H/5487312_0554.jpg",
		},
	]
}
