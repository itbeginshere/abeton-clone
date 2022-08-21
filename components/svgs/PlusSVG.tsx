const PlusSVG = (props : React.SVGProps<SVGSVGElement>) => {
    
    const { width = 24, height = 24, ...rest} = props;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest}>
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/>
        </svg>
    );
}

export default PlusSVG;