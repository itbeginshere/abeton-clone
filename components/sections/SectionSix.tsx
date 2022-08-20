import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const SectionSix = () => {
    return (
        <div>
            <div className={'flex flex-col items-center'}>
                <div>
                    <p className={'font-semibold text-lg max-w-[600px] pb-3'}>
                        We want our employees to love it here. Since we&apos;re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
                    </p>
                    <p className={'font-normal max-w-[600px] text-sm leading-6'}>
                        If you&apos;re joining us in Berlin, we&apos;ll help with relocation and paperwork. We&apos;ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it&apos;s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
                    </p>
                </div>
            </div>
            <div className={'mb-20'}/>
            <div className={'ml-20 mr-20'}>
                <img 
                    src={"https://ableton-production.imgix.net/about/photo-8.jpg?crop=right&fit=crop&h=394&ixjsv=1.1.3&w=657"}
                    className={'bg-cover bg-no-repeat h-auto w-full'}
                    alt={'Graphs'}
                />
                <div className={'bg-custom-melrose p-16'}>
                    <p className={'font-semibold text-lg leading-7'}>
                        We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
                    </p>
                    <Link href={'#'}>
                        <p className={'font-semibold text-lg text-custom-blue pt-6'}>
                            See latest jobs &gt;
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

    export default SectionSix;