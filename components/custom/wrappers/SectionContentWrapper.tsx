interface ISectionContentWrapperProps {
    children : React.ReactNode;
}

const SectionContentWrapper = (props : ISectionContentWrapperProps) => {
    return (
        <p className={'font-normal max-w-[700px] lg:max-w-[750px] text-sm lg:text-lg leading-6 lg:leading-7'}>
            {props.children}
        </p>
    )
}

export default SectionContentWrapper;