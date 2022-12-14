const LogoSVG = (props : React.SVGProps<SVGSVGElement>) : React.ReactElement => {
    return (
        <svg 
            role="img"
            aria-labelledby="logo" 
            xmlns="http://www.w3.org/2000/svg" 
            {...props}
            width="3.75em" 
            height="1.75em" 
            viewBox="0 0 45 21"
        >
            <title 
                id="logo"
            >
                Ableton Homepage
            </title>
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
        </svg>
    )
}

export default LogoSVG;