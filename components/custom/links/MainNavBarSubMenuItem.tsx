import Link from 'next/link';

interface IMainNavBarSubMenuItemProps {
    text : string;
}

const MainNavBarSubMenuItem = (props : IMainNavBarSubMenuItemProps) => {
    return (
        <Link href={'#'} passHref className={'pl-6'}>
            <a>
                <span className={'text-base text-black'}>{props.text}</span>
            </a>
        </Link>
    );
}

export default MainNavBarSubMenuItem;