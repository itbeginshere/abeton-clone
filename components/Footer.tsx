import FooterHeader from './custom/headers/FooterHeader';
import CountrySelection from './custom/input/CountrySelection';
import EmailTextField from './custom/input/EmailTextField';
import LanguageSelection from './custom/input/LanguageSelection';
import FooterGreaterThankLink from './custom/links/FooterGreaterThanLink';
import FooterLink from './custom/links/FooterLink';
import FacebookSVG from './svgs/FacebookSVG';
import InstagramSVG from './svgs/InstagramSVG';
import LogoSVG from './svgs/LogoSVG';
import TwitterSVG from './svgs/TwitterSVG';
import YoutubeSVG from './svgs/YoutubeSVG';

const Footer = () => {
    return (
        <div className={'px-14 lg:px-20 py-10 lg:py-16 border-so lid border-t-2 border-gray-100'}>
            <h2 className={'text-3xl lg:text-6xl font-semibold'}>Ableton</h2>
            <div className={'grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-3 lg:py-14'}>
                <div className={'pt-6 lg:pt-0 lg:col-span-3'}>
                    <h5 className={'font-semibold'}>Sign up to our newsletter</h5>
                    <p className={'text-sm leading-6'}>Enter your email address to stay up to date with the latest offers, turtoials, downloads, surveys and more.</p>
                    <form className={'flex flex-row pt-3 pb-8'}>
                        <EmailTextField />
                        <button 
                            type={'submit'} 
                            className={'bg-custom-blue py-2 px-7'}
                        >
                            <span className={'font-semibold text-sm text-white whitespace-nowrap'}>Sign Up</span>
                        </button>
                    </form>
                </div>
                <div className={'lg:col-span-1'}>
                    <div className={'mb-2'}>
                        <FooterGreaterThankLink text={'Register Live or Push'}/>
                        <FooterGreaterThankLink text={'About Ableton'}/>
                        <FooterGreaterThankLink text={'Jobs'}/>
                    </div>
                    <div className={'flex flex-row gap-2 mb-6'}>
                        <div className={'bg-logo-facebook p-3 w-min'}>
                            <FacebookSVG className={'fill-current text-white scale-150'}/>
                        </div>
                        <div className={'bg-logo-twitter p-3 w-min'}>
                            <TwitterSVG className={'fill-current text-white scale-150'}/>
                        </div>
                        <div className={'bg-logo-youtube p-3 w-min'}>
                            <YoutubeSVG className={'fill-current text-white scale-150'}/>
                        </div>
                        <div className={'bg-logo-instagram p-3 w-min'}>
                            <InstagramSVG className={'fill-current text-white scale-150'}/>
                        </div>
                    </div>
                </div>
                <div className={'mb-6 lg:mb-0 lg:col-span-2'}>
                    <FooterHeader text={'Education'} />
                    <FooterGreaterThankLink text={'Offers for students and teachers'}/>
                    <FooterGreaterThankLink text={'Ableton for the Classroom'}/>
                    <FooterGreaterThankLink text={'Ableton for Colleges and Universities'}/>
                </div>
                <div className={'mb-6 lg:mb-0'}>
                    <FooterHeader text={'Community'} />
                    <FooterGreaterThankLink text={'Find Ableton User Groups'}/>
                    <FooterGreaterThankLink text={'Find Certified Training'}/>
                    <FooterGreaterThankLink text={'Become a Certified Trainer'}/>
                </div>
                <div className={'mb-6 lg:mb-0'}>
                    <FooterHeader text={'Distributers'} />
                    <FooterGreaterThankLink text={'Find Distributors'}/>
                    <FooterGreaterThankLink text={'Try Push-in-store'}/>
                </div>
                <div>
                    <FooterHeader text={'Language and Location'} />
                    <div className={'flex flex-row pt-3'}>
                        <LanguageSelection />
                        <CountrySelection />
                    </div>
                </div>
            </div>
            <div className={'lg:flex lg:flex-row lg:justify-between lg:items-center'}>
                <div className={'pt-5 lg:pt-0 lg:flex lg:flex-row lg:gap-3'}>
                    <FooterLink text={'Contact Us'}/>
                    <FooterLink text={'Press Resources'}/>
                    <FooterLink text={'Legal Info'}/>
                    <FooterLink text={'Privacy Policy'}/>
                    <FooterLink text={'Cookie Settins'}/>
                    <FooterLink text={'Imprint'}/>
                </div>
                <div className={'flex flex-row gap-5 items-center pt-14 lg:pt-0'}>
                    <LogoSVG className={'scale-75'}/>
                    <span className={'font-semibold text-xs'}>Made In Berlin</span>
                </div>
            </div>
        </div>

    )
};

export default Footer;