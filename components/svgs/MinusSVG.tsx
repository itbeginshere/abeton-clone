const MinusSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const { width = 24, height = 24, ...rest } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest}>
            <path d="M5 11h14v2H5z"></path>
        </svg>
    )
}

export default MinusSVG;