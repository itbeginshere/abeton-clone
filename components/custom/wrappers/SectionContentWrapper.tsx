interface ISectionContentWrapperProps {
    children : React.ReactNode;
}

const SectionContentWrapper = (props : ISectionContentWrapperProps) => {
    return (
        <p className={'font-normal max-w-[600px] text-sm leading-6'}>
            {props.children}
        </p>
    )
}

export default SectionContentWrapper;