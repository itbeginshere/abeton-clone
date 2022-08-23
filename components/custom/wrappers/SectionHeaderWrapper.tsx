interface ISectionHeaderWrapperProps {
    children : React.ReactNode;
}

const SectionHeaderWrapper = (props : ISectionHeaderWrapperProps) => {
    return (
        <h2 className={'font-semibold text-lg lg:text-2xl leading-7 lg:leading-10 max-w-[700px] lg:max-w-[750px] pb-3'}>
            {props.children}
        </h2>
    )
}

export default SectionHeaderWrapper;