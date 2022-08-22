import Link from 'next/link';

interface IMobileMainNavbarMenuitemProps {
    text : string;
}

const MobileMainNavbarMenuitem = (props : IMobileMainNavbarMenuitemProps) => {
    return (
        <Link href={'#'} passHref>
            <a>
                <p className={'text-white font-semibold text-xl pb-5'}>{props.text}</p>
            </a>
        </Link>
    );
}

export default MobileMainNavbarMenuitem;