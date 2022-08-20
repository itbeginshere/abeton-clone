/* eslint-disable @next/next/no-img-element */
const SectionFour = () => {
    return (
        <div>
            <div className={'flex flex-col items-center'}>
                <div>
                    <p className={'font-semibold text-lg max-w-[600px] pb-3'}>
                        We believe it takes focus to create truly outstanding instruments. We only    work on a few products and we strive to make them great.
                    </p>
                    <p className={'font-normal max-w-[600px] text-sm leading-6'}>
                         Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
                    </p>
                </div>
            </div>
            <div className={'mb-20'}/>
            <div className={'ml-20 mr-20'}>
                <img 
                src={"https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=648"}
                className={'bg-cover bg-no-repeat h-auto w-full'}
                alt={'Graphs'}
            />
            </div>
        </div>
    )
};

    export default SectionFour;