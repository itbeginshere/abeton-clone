import Link from 'next/link';

interface IMainNavBarMenuItemProps {
    text : string;
}

const MainNavBarMenuItem = (props : IMainNavBarMenuItemProps) => {
    return (
        <Link href={'#'} passHref className={'pl-6'}>
            <a>
                <span className={'text-custom-small-bold text-custom-text'}>{props.text}</span>
            </a>
        </Link>
    );
}

export default MainNavBarMenuItem;