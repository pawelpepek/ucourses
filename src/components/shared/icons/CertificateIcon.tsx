function CertificateIcon(props: { classesAdd?: string }) {
	return (
        <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`icon icon-tabler  ${props.classesAdd}`}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='#000000'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <g transform='translate(4.5, 6)'>
            <rect
                width='16'
                height='12.5'
                fill='white'
                stroke='white'
            />
        </g>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path
            d='M13 17.5v4.5l2 -1.5l2 1.5v-4.5'
            stroke='#0d6efd'
        />
        <circle cx='15' cy='15' r='3' fill='yellow' />
        <path d='M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73' />
        <line x1='6' y1='9' x2='18' y2='9' stroke='#212529' />
        <line x1='6' y1='12' x2='9' y2='12' stroke='#212529' />
        <line x1='6' y1='15' x2='8' y2='15' stroke='#212529' />
    </svg>
	)
}

export default CertificateIcon