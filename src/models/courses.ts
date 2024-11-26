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
			authors: [authors[15], authors[4]],
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
			authors: [authors[15], authors[4]],
		},
		{
			id: 13,
			name: "C# .NET: Pytania z rozmów kwalifikacyjnych (junior/regular)",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-649e89dd-59e6-47e7-b3b4-b6b8e6581e32.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 7.5 }],
			authors: [authors[0]],
			completed: "2022-10-30",
			address:
				"https://www.udemy.com/course/c-net-rozmowa-kwalifikacyjna-pytania-junior-regular",
		},
		{
			id: 14,
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
			id: 15,
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
			id: 16,
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
			id: 17,
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
			id: 18,
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
			id: 19,
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
			id: 20,
			name: "React Native - The Practical Guide [2023]",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-f352ceed-865b-4125-acf2-4e017e97189c.jpg",
			completed: "2023-02-23",
			subjects: [{ subject: CourseSubject.Frontend, hours: 28.5 }],
			address: "https://www.udemy.com/course/react-native-the-practical-guide",
			authors: [authors[15], authors[4]],
		},
		{
			id: 21,
			name: "Clean Code",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-e2f8cbb1-6c9f-4cea-b7ea-6143eed69893.jpg",
			completed: "2023-03-02",
			subjects: [
				{ subject: CourseSubject.Frontend, hours: 3 },
				{ subject: CourseSubject.Backend, hours: 3.5 },
			],
			address: "https://www.udemy.com/course/writing-clean-code",
			authors: [authors[15], authors[4]],
		},
		{
			id: 22,
			name: "SQL Server - programowanie, typy zaawansowane, XML",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-70eb2862-1fbd-492a-8d52-b407f4b70eba.jpg",
			subjects: [{ subject: CourseSubject.Database, hours: 4.5 }],
			authors: [authors[1]],
			completed: "2023-03-14",
			address:
				"https://www.udemy.com/course/sql-server-programowanie-typy-zaawansowane-xml",
		},
		{
			id: 23,
			name: "Refactoring to Design Patterns by Example",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-6e7d225f-b556-4ba8-9ba0-282539398b09.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 4.5 }],
			authors: [authors[8]],
			completed: "2023-04-25",
			address: "https://www.udemy.com/course/refactoring-to-patterns",
		},
		{
			id: 24,
			name: "Visual Studio Mastery with C# - Double Your Productivity",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-a97d52a6-6893-4091-a475-c92086d2bbe1.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 1.5 }],
			authors: [authors[9]],
			completed: "2023-06-05",
			address:
				"https://www.udemy.com/course/visual-studio-mastery-productive-and-fast-coding",
		},
		{
			id: 25,
			name: "Microsoft Azure - praktyczy kurs dla developerów .NET",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-24cff830-856c-44b9-8c3a-860f43e67234.jpg",
			subjects: [
				{ subject: CourseSubject.Backend, hours: 5 },
				{ subject: CourseSubject.Other, hours: 4.5 },
			],
			authors: [authors[0]],
			completed: "2023-06-21",
			address:
				"https://www.udemy.com/course/microsoft-azure-praktyczy-kurs-dla-developerow-net",
		},
		{
			id: 26,
			name: "BASH & LINUX - wiersz poleceń od podstaw",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-9fffc9f7-7dbe-4573-8469-7fd7f6817157.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 9.5 }],
			authors: [authors[10]],
			completed: "2023-07-26",
			address: "https://www.udemy.com/course/bash-od-podstaw",
		},
		{
			id: 27,
			name: "Podstawy Scrum i Agile - Teoria, Praktyka, Certyfikacja",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-3a1411ae-d6d2-49c8-b484-ce912b765abe.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 3 }],
			authors: [authors[11], authors[12]],
			completed: "2023-08-15",
			address:
				"https://www.udemy.com/course/scrum-podstawy-teoretyczne-praktyczne-certyfikacja",
		},
		{
			id: 28,
			name: "Design Patterns in C# and .NET",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-d91f3c0e-4e98-4b42-9cc0-3844f82d6c18.jpg",
			subjects: [{ subject: CourseSubject.Backend, hours: 20.5 }],
			authors: [authors[13]],
			completed: "2023-11-10",
			address: "https://www.udemy.com/course/design-patterns-csharp-dotnet",
			homework:
				"https://github.com/pawelpepek/SmallProjects/tree/main/TreeTraversal",
		},
		{
			id: 29,
			name: "Kurs Jira od podstaw - zarządzanie projektami",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-4bad8fd9-da45-4f53-bb71-ccc77485a2e8.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 4.5 }],
			authors: [authors[14]],
			completed: "2023-11-15",
			address:
				"https://www.udemy.com/course/kurs-jira-od-podstaw-zarzadzanie-projektami",
		},
		{
			id: 30,
			name: "ChatGPT, Midjourney, DALL-E 3 & APIs - The Complete Guide",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-3689abc1-2525-4f26-aef3-7a161ec3c8d1.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 16 }],
			authors: [authors[15], authors[4], authors[16]],
			completed: "2023-12-13",
			address:
				"https://www.udemy.com/course/chatgpt-bard-bing-complete-guide-to-chatgpt-openai-apis",
		},
		{
			id: 31,
			name: "Sieci komputerowe",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-787153bb-a97b-4aa8-ac16-69a51d4973ad.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 4 }],
			authors: [authors[17], authors[18]],
			completed: "2023-12-21",
			address: "https://www.udemy.com/course/sieci-komputerowe",
		},
		{
			id: 32,
			name: "Wstęp do algorytmów i struktur danych",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-191580e8-40e2-4114-bdcb-6b819eabfdf7.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 10.5 }],
			authors: [authors[17], authors[18]],
			completed: "2024-01-30",
			address:
				"https://www.udemy.com/course/wstep-do-algorytmow-i-struktur-danych",
		},
		{
			id: 33,
			name: "Bootstrap Od Podstaw - Stwórz 4 Wyjątkowe strony WWW!",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-72fe2bf8-7df7-4375-9ff2-f67fa4774bb7.jpg",
			subjects: [{ subject: CourseSubject.Frontend, hours: 6.5 }],
			authors: [authors[3]],
			completed: "2024-02-01",
			address:
				"https://www.udemy.com/course/bootstrap-flexbox-od-podstaw-projekty",
			homework: "https://github.com/pawelpepek/bootstrapExcercise",
		},
		{
			id: 34,
			name: "Git & GitHub - The Practical Guide",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-b42a9cd8-8bc7-4a67-881a-01ca85a05b2b.jpg",
			subjects: [{ subject: CourseSubject.Other, hours: 10.5 }],
			authors: [authors[15], authors[4], authors[16]],
			completed: "2024-03-13",
			address: "https://www.udemy.com/course/git-github-practical-guide",
		},
		{
			id: 35,
			name: "React.js & Firebase Project - ReactJS 18, Firebase 9 Project",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-f3404aa7-a098-4a3c-8a21-08fdc4f68fb5.jpg",
			subjects: [{ subject: CourseSubject.Frontend, hours: 17 }],
			authors: [authors[19]],
			completed: "2024-04-15",
			address: "https://www.udemy.com/course/reactjs-firebase-project",
		},
		{
			id: 36,
			name: "Angular Signals In Depth (Angular 18)",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-744b1f7b-9fc4-4844-8838-d2ea81c01510.jpg",
			subjects: [{ subject: CourseSubject.Frontend, hours: 6.5 }],
			authors: [authors[20]],
			completed: "2024-10-21",
			address: "https://www.udemy.com/course/angular-signals",
		},
		{
			id: 37,
			name: "Supabase in 90 Minutes: Auth, Storage, RLS, Realtime & More",
			certificate:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-ca0a67c1-904f-4651-bda3-d9f9102d4a9c.jpg",
			subjects: [
				{ subject: CourseSubject.Frontend, hours: 0.5 },
				{ subject: CourseSubject.Other, hours: 1 },
			],
			authors: [authors[21], authors[22]],
			completed: "2024-10-30",
			address:
				"https://www.udemy.com/course/supabase-quickstart-auth-storage-rls-realtime-more",
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
			img: "https://img-c.udemycdn.com/user/200_H/47980698_db20_5.jpg",
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
		{
			id: 8,
			language: Language.eng,
			name: "Zoran Horvat",
			description: "CEO and Principal Consultant at Coding Helmet s.p.r.l.",
			img: "https://img-c.udemycdn.com/user/200_H/57626100_d58f.jpg",
		},
		{
			id: 9,
			language: Language.eng,
			name: "Tod Vachev",
			description:
				"Best Selling Instructor 100,000+ Students, Robotics Engineer",
			img: "https://img-c.udemycdn.com/user/200_H/10898022_c87c_3.jpg",
		},
		{
			id: 10,
			language: Language.pln,
			name: "Mikołaj Głodziak",
			description: "Systems Engineer, Linux engineer, IT monitoring engineer",
			img: "https://img-c.udemycdn.com/user/200_H/142224638_0613_3.jpg",
		},
		{
			id: 11,
			language: Language.pln,
			name: "Jarosław Łojko",
			description: "PSM III, Scrum Master",
			img: "https://img-c.udemycdn.com/user/200_H/11037280_75e6.jpg",
		},
		{
			id: 12,
			language: Language.pln,
			name: "Paweł Kałkus",
			description: "Professional Scrum Trainer @ Scrum.org, Agile Coach",
			img: "https://img-c.udemycdn.com/user/200_H/7088354_47d5.jpg",
		},
		{
			id: 13,
			language: Language.eng,
			name: "Dmitri Nesteruk",
			description:
				"Software/Hardware Engineering • Quant Finance • Algotrading",
			img: "https://img-c.udemycdn.com/user/200_H/525118_7a52_4.jpg",
		},
		{
			id: 14,
			language: Language.pln,
			name: "Rafał Podraza",
			description: "Tester oprogramowania, web developer",
			img: "https://img-c.udemycdn.com/user/200_H/37633654_b59a_4.jpg",
		},
		{
			id: 15,
			language: Language.eng,
			name: "Academind by Maximilian Schwarzmüller",
			description: "Online Education",
			img: "https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg",
		},
		{
			id: 16,
			language: Language.eng,
			name: "Manuel Lorenz",
			description: "Professional Business Analyst and Instructor",
			img: "https://img-c.udemycdn.com/user/200_H/30035496_b180_2.jpg",
		},
		{
			id: 17,
			language: Language.pln,
			name: "Mentorzy IT",
			description: "Uczymy programować!",
			img: "https://img-c.udemycdn.com/user/200_H/106358336_d551_2.jpg",
		},
		{
			id: 18,
			language: Language.pln,
			name: "Wojciech Goledzinowski",
			description: "Instruktor",
			img: "https://img-c.udemycdn.com/user/200_H/125156992_7686_2.jpg",
		},
		{
			id: 19,
			language: Language.eng,
			name: "Dr. Sahand Ghavidel",
			description: "Web Developer",
			img: "https://img-c.udemycdn.com/user/200_H/65148228_08f1.jpg",
		},
		{
			id: 20,
			language: Language.eng,
			name: "Angular University",
			description: "Best Selling Angular Courses",
			img: "https://img-c.udemycdn.com/user/200_H/13125810_51c9_4.jpg",
		},
		{
			id: 21,
			language: Language.eng,
			name: "Harrison Sligting",
			description: "Instructor at Udemy",
			img: "https://img-c.udemycdn.com/user/200_H/76104524_26e9_2.jpg",
		},
		{
			id: 22,
			language: Language.eng,
			name: "Canon Law",
			description: "Software Engineer",
			img: "https://img-c.udemycdn.com/user/200_H/16326246_05be.jpg",
		},
	]
}
