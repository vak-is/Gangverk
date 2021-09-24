function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20" 
      width="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#32292F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-home"
      {...props}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  )
}

export default HomeIcon
