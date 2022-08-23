import Link from 'next/link';
import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

/* eslint-disable @next/next/no-img-element */
const SectionSix = () => {
    return (
        <section className={'px-14 lg:px-20'}>
            <div className={'flex flex-col items-center'}>
                <div>
                    <SectionHeaderWrapper>
                        We want our employees to love it here. Since we&apos;re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                        If you&apos;re joining us in Berlin, we&apos;ll help with relocation and paperwork. We&apos;ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it&apos;s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div>
                <img 
                    src={"https://ableton-production.imgix.net/about/photo-8.jpg?crop=right&fit=crop&h=394&ixjsv=1.1.3&w=657"}
                    className={'bg-cover bg-no-repeat h-auto w-full'}
                    alt={'Graphs'}
                />
                <div className={'bg-custom-melrose p-16 lg:p-20'}>
                    <p className={'font-semibold text-lg leading-7'}>
                        We&apos;re really proud of the work we&apos;ve done so far. But there&apos;s so much more to come. If you&apos;d like to be a part of it, please join us.
                    </p>
                    <Link href={'#'}>
                        <a>
                            <p className={'font-semibold text-lg text-custom-blue pt-6'}>
                                See latest jobs &gt;
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
};

    export default SectionSix;