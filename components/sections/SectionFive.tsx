import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

const SectionThree = () => {
    return (
        <section>
            <div className={'flex flex-col items-center px-14 lg:px-20'}>
                <div>
                    <SectionHeaderWrapper>
                     We&apos;re passionate about what we do, but we&apos;re equally passionate about improving who we are.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                        We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
                    </SectionContentWrapper>
                    <div className='pt-4'/>
                    <SectionContentWrapper>
                        Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div className={'py-8 lg:py-9 relative'}>
                <div className={'flex flex-row items-center h-[50vw] xl:h-[750px] justify-between'}>
                    <div className={'bg-section-five-left-image bg-no-repeat bg-cover w-[33vw] xl:w-[533px] h-[25vw] xl:h-[400px] ml-10 lg:ml-20 z-10'}/>
                    <div className={'bg-section-five-right-image bg-no-repeat bg-cover w-[42vw] xl:w-[667px] h-[42vw] xl:h-[667px] ml-10 lg:ml-20 z-10'}/>
                </div>
                <div className={'h-full absolute bg-custom-mauve w-[66vw] xl:w-[933px] top-0 right-[18%] z-0'}/>
            </div>
        </section>
    );
}

export default SectionThree;