import Link from 'next/link';
import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

const SectionOne = () => {
    return (
        <div>
            <div className={'flex flex-col items-center px-14 lg:px-20'}>
                <div>
                    <SectionHeaderWrapper>
                        We make <Link href={'#'}><span className={'text-custom-blue'}>Live, Push</span></Link> and <Link href={'#'}><span className={'text-custom-blue'}>Link</span></Link> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div className={'py-8 lg:py-14 relative'}>
                <div className={'flex flex-row items-center h-[50vw] xl:h-[750px]'}>
                    <div className={'bg-section-one-image-one bg-no-repeat bg-cover w-[42vw] xl:w-[667px] h-[42vw] xl:h-[667px] ml-14 lg:ml-20 z-10'}/>
                    <div className={'bg-section-one-image-two bg-no-repeat bg-cover w-[33vw] xl:w-[533px] h-[25vw] xl:h-[400px] ml-14 mr-14 lg:ml-20 lg:mr-20 z-10'}/>
                </div>
                <div className={'h-full absolute bg-custom-milan w-[60%] xl:w-[933px] top-0 right-0 z-0'}/>
            </div>
        </div>
    )
};

export default SectionOne;