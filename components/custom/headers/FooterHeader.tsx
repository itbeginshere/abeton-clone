
interface IFooterHeaderProps {
    text : string;
}

const FooterHeader = (props : IFooterHeaderProps) => {
    return (
        <h5 className={'font-semibold'}>{props.text}</h5>
    );
}

export default FooterHeader;