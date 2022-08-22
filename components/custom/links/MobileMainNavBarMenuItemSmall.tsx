import Link from 'next/link';

interface IMobileMainNavBarMenuItemSmallProps {
    text : string;
}

const MobileMainNavBarMenuItemSmall = (props : IMobileMainNavBarMenuItemSmallProps) => {
    return (
        <Link href={'#'}>
            <p className={'text-white font-normal text-sm pb-4'}>{props.text}</p>
        </Link>
    )
}

export default MobileMainNavBarMenuItemSmall;