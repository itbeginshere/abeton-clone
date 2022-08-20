const CaretUpSVG = (props : React.SVGProps<SVGSVGElement>) : React.ReactElement => {
    
    const { width = 24, height = 24, ...rest } = props;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest}>
            <path d="M5 15h14l-7-8z"></path>
        </svg>
    );
}

export default CaretUpSVG;