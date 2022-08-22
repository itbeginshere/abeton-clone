import Link from 'next/link';

const QuickNavbar = () : React.ReactElement => {
    return (
        <div className={'flex flex-row '}>
            <Link href={'#'} passHref>
                <a className={'p-5'}>
                    <span className={'text-xs font-semibold text-custom-coral'}>About</span>
                </a>
            </Link>
            <Link href={'#'} passHref>
                <a className={'p-5'}>
                    <span className={'text-xs font-semibold text-custom-text'}>Jobs</span>
                </a>
            </Link>
            <Link href={'#'} passHref>
                <a className={'p-5'}>
                    <span className={'text-xs font-semibold text-custom-text'}>Apprenticeships</span>
                </a>
            </Link>
        </div>
    )
};

export default QuickNavbar;