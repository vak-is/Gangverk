function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#32292F"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chevron"
            {...props}
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}

export default ChevronIcon
