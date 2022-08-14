import Link from 'next/link';

const QuickNavbar = () : React.ReactElement => {
    return (
        <div className={'flex flex-row'}>
            <Link href={'#'} passHref>
                <span className={'text-custom-small-bold text-custom-coral p-5'}>About</span>
            </Link>
            <Link href={'#'} passHref>
                <span className={'text-custom-small-bold text-custom-text p-5'}>Jobs</span>
            </Link>
            <Link href={'#'} passHref>
                <span className={'text-custom-small-bold text-custom-text p-5'}>Apprenticeships</span>
            </Link>
        </div>
    )
};

export default QuickNavbar;