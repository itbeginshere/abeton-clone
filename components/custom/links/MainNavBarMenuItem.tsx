import Link from 'next/link';

interface IMainNavBarMenuItemProps {
    text : string;
}

const MainNavBarMenuItem = (props : IMainNavBarMenuItemProps) => {
    return (
        <Link href={'#'} passHref className={'pl-6'}>
            <a>
                <span className={'text-base font-semibold text-black'}>{props.text}</span>
            </a>
        </Link>
    );
}

export default MainNavBarMenuItem;