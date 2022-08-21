import Link from 'next/link'

interface IFooterGreaterThankLinkProps {
    text : string;
}

const FooterGreaterThankLink = (props : IFooterGreaterThankLinkProps) => {
    return (
         <Link href={'#'} passHref>
            <a>
                <p className={'text-sm leading-6'}>{props.text} &gt;</p>
            </a>
        </Link>
    )
}

export default FooterGreaterThankLink;