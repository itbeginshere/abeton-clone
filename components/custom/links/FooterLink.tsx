import Link from 'next/link'

interface IFooterLinkProps {
    text : string;
}

const FooterLink = (props : IFooterLinkProps) => {
    return (
         <Link href={'#'} passHref>
            <a>
                <p className={'text-sm leading-6'}>{props.text}</p>
            </a>
        </Link>
    )
}

export default FooterLink;