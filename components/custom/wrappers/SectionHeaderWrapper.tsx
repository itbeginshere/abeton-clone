interface ISectionHeaderWrapperProps {
    children : React.ReactNode;
}

const SectionHeaderWrapper = (props : ISectionHeaderWrapperProps) => {
    return (
        <p className={'font-semibold text-lg max-w-[600px] pb-3'}>
            {props.children}
        </p>
    )
}

export default SectionHeaderWrapper;