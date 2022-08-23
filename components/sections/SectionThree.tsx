import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

const SectionThree = () => {
    return (
        <div>
            <div className={'flex flex-col items-center px-14 lg:px-20'}>
                <div>
                    <SectionHeaderWrapper>
                        We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                        Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div className={'py-14 lg:py-20 relative'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'flex flex-col ml-14 lg:ml-20'}>
                        <div className={'bg-section-three-left-image-one bg-no-repeat bg-cover w-[33vw] h-[25vw] mb-10 lg:mb-20 z-10'}/>
                        <div className={'bg-section-three-left-image-two bg-no-repeat bg-cover w-[33vw] h-[25vw] z-10'}/>
                    </div>
                    <div className={'bg-section-three-right-image-one bg-no-repeat bg-cover w-[42vw] h-[42vw] ml-10 mr-10 lg:ml-20 lg:mr-20 z-10'}/>
                </div>
                <div className={'h-full absolute bg-custom-snowy-mint w-[68vw] top-0 left-0'}/>
            </div>
        </div>
    );
}

export default SectionThree;