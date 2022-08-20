const SectionThree = () => {
    return (
        <div>
            <div className={'flex flex-col items-center'}>
                <div>
                    <p className={'font-semibold text-lg max-w-[600px] pb-3'}>
                        We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
                    </p>
                    <p className={'font-normal max-w-[600px] text-sm leading-6'}>
                        Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                    </p>
                </div>
            </div>
            <div className={'mb-20'}/>
            <div className={'py-14 relative'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'flex flex-col ml-20'}>
                        <div className={'bg-section-three-left-image-one bg-no-repeat bg-cover w-[33vw] h-[25vw] mb-20 z-10'}/>
                        <div className={'bg-section-three-left-image-two bg-no-repeat bg-cover w-[33vw] h-[25vw] z-10'}/>
                    </div>
                    <div className={'bg-section-three-right-image-one bg-no-repeat bg-cover w-[42vw] h-[42vw] ml-20 mr-20 z-10'}/>
                </div>
                <div className={'h-full absolute bg-custom-snowy-mint w-[68vw] top-0 left-0'}/>
            </div>
            <div className={'mb-20'}/>
        </div>
    );
}

export default SectionThree;