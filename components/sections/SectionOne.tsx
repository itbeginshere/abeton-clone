import Link from 'next/link';

const SectionOne = () => {
    return (
        <div>
            <div className={'flex flex-col items-center px-14'}>
                <div>
                    <p className={'font-semibold max-w-[600px] pb-3 text-lg'}>
                        We make <Link href={'#'}><span className={'text-custom-blue'}>Live, Push</span></Link> and <Link href={'#'}><span className={'text-custom-blue'}>Link</span></Link> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                    </p>
                    <p className={'font-normal max-w-[600px] text-sm leading-6'}>
                        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
                    </p>
                </div>
            </div>
            <div className={'mb-14'}/>
            <div className={'py-8 relative'}>
                <div className={'flex flex-row items-center h-[50vw]'}>
                    <div className={'bg-section-one-image-one bg-no-repeat bg-cover w-[42vw] h-[42vw] ml-14 z-10'}/>
                    <div className={'bg-section-one-image-two bg-no-repeat bg-cover w-[33vw] h-[25vw] ml-14 mr-14 z-10'}/>
                </div>
                <div className={'h-full absolute bg-custom-milan w-3/5 top-0 right-0 z-0'}/>
            </div>
        </div>
    )
};

export default SectionOne;