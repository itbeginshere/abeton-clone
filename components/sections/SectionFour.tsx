import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

/* eslint-disable @next/next/no-img-element */
const SectionFour = () => {
    return (
        <section className={'px-14 lg:px-20'}>
            <div className={'flex flex-col items-center'}>
                <div>
                    <SectionHeaderWrapper>
                        We believe it takes focus to create truly outstanding instruments. We only    work on a few products and we strive to make them great.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                         Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We&apos;ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don&apos;t always agree with each other, but opinion and debate are valued and openly encouraged.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div>
                <img 
                src={"https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=648"}
                className={'bg-cover bg-no-repeat h-auto w-full'}
                alt={'Graphs'}
            />
            </div>
        </section>
    )
};

    export default SectionFour;