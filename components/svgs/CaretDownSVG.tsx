const CaretDownSVG = (props : React.SVGProps<SVGSVGElement>) : React.ReactElement => {
    
    const { width = 24, height = 24, ...rest } = props;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest}>
            <path d="m11.998 17 7-8h-14z"></path>
        </svg>
    );
}; 

export default CaretDownSVG;