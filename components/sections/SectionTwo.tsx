/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import MainSpacer from '../custom/spacers/MainSpacer';
import SectionContentWrapper from '../custom/wrappers/SectionContentWrapper';
import SectionHeaderWrapper from '../custom/wrappers/SectionHeaderWrapper';

const SectionTwo = () => {

    const [showVideo, setShowVieo] = useState<boolean>(false);

    const onShowVideoClick = () => {
        setShowVieo(true);
    };

    return (
        <section className={'mx-14 lg:mx-20'}>
            <div className={'flex flex-col items-center'}>
                <div>
                    <SectionHeaderWrapper>
                        Making music isn&apos;t easy. It takes time, effort, and learning. But when you&apos;re in the flow, it&apos;s incredibly rewarding.
                    </SectionHeaderWrapper>
                    <SectionContentWrapper>
                        We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
                    </SectionContentWrapper>
                </div>
            </div>
            <MainSpacer />
            <div className={'lg:mx-20'}>
                <div className={'pb-[57%] relative cursor-pointer bg-black '} onClick={onShowVideoClick}>
                    {
                        showVideo ? 
                            <iframe 
                                id={'9sbnhgjeyxa'} 
                                src={"https://www.youtube-nocookie.com/embed/9SbnhgjeyXA?wmode=transparent&controls=1&vq=hd1080&rel=0&showinfo=0&autohide=1&color=white&modestbranding=1&enablejsapi=1&autoplay=1"}
                                frameBorder={0}
                                allowFullScreen 
                                title={'Why Ableton - Juanpe Bolivar'}   
                                className={'absolute left-0 top-0 h-full w-full'}
                            /> : 
                            <>
                                <img 
                                    src={"https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=800"} 
                                    alt={'man smiling'}
                                    className={'absolute top-0 left-0 w-full h-full object-cover'}
                                />
                                <div className={'flex flex-row items-center justify-center absolute z-10 w-full h-full'}>
                                    <img 
                                        src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxjaXJjbGUgZmlsbD0iIzAwMzNGRiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIzNSwyNSAyNywyOS41IDE5LDM0IDE5LDI1IDE5LDE2IDI3LDIwLjUgIi8+PC9nPjwvc3ZnPg=='}
                                        alt={'Play button'}
                                        className={'w-[75px] h-[75px] bg-[length:75px_75px] bg-no-repeat bg-center'}
                                    />
                                </div>
                            </>
                    }
                </div>
                <p className='text-sm font-medium pt-2'>Why Ableton - Juanpe Bolivar</p>
            </div>
        </section>
    )
}

export default SectionTwo;