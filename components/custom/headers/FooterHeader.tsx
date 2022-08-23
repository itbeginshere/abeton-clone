
interface IFooterHeaderProps {
    text : string;
}

const FooterHeader = (props : IFooterHeaderProps) => {
    return (
        <h3 className={'font-semibold'}>{props.text}</h3>
    );
}

export default FooterHeader;