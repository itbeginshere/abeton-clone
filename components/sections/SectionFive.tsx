import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

const SectionThree = () => {
    return (
        <div>
            <div className={'flex flex-col items-center px-14'}>
                <div>
                    <SectionHeaderWrapper>
                     We&apos;re passionate about what we do, but we&apos;re equally passionate about improving who we are.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                        We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div className={'py-8 relative'}>
                <div className={'flex flex-row items-center h-[50vw] justify-between'}>
                    <div className={'bg-section-five-left-image bg-no-repeat bg-cover w-[33vw] h-[25vw] ml-10 z-10'}/>
                    <div className={'bg-section-five-right-image bg-no-repeat bg-cover w-[42vw] h-[42vw] ml-10 z-10'}/>
                </div>
                <div className={'h-full absolute bg-custom-mauve w-[66vw] top-0 right-[18%] z-0'}/>
            </div>
        </div>
    );
}

export default SectionThree;