const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#32292F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="featherIcon"
        {...props}
      >
        <circle cx={12} cy={12} r={10} />
        <circle cx={12} cy={12} r={3} />
      </svg>
    )
  }
  
  export default SvgComponent
  