import Link from 'next/link';

const QuickNavbar = () : React.ReactElement => {
    return (
        <div className={'flex flex-row'}>
            <Link href={'#'}>
                <span className={'text-xs font-semibold text-custom-coral p-5'}>About</span>
            </Link>
            <Link href={'#'}>
                <span className={'text-xs font-semibold text-custom-text p-5'}>Jobs</span>
            </Link>
            <Link href={'#'}>
                <span className={'text-xs font-semibold text-custom-text p-5'}>Apprenticeships</span>
            </Link>
        </div>
    )
};

export default QuickNavbar;