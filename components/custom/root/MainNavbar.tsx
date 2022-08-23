import Link from 'next/link';
import { useState } from 'react';
import CaretDownSVG from '../../svgs/CaretDownSVG';
import CaretUpSVG from '../../svgs/CaretUpSVG';
import LogoSVG from '../../svgs/LogoSVG';
import MinusSVG from '../../svgs/MinusSVG';
import PlusSVG from '../../svgs/PlusSVG';
import MainNavBarMenuItem from '../links/MainNavBarMenuItem';
import MainNavBarSubMenuItem from '../links/MainNavBarSubMenuItem';
import MobileMainNavbarMenuitem from '../links/MobileMainNavBarMenuItem';
import MobileMainNavBarMenuItemSmall from '../links/MobileMainNavBarMenuItemSmall';

const MainNavbar = () => {

    const [collaspibleMoreToggle, setCollapsibleMoreToggle] = useState<boolean>(false);
    const [collapsibleMobileMenuToggle, setCollapsibleMobileMenuToggle] = useState<boolean>(false);

    const onToggleCollapsibleMore = () : void => {
        setCollapsibleMoreToggle(prevToggle => !prevToggle);
    }

    const onToggleCollapsibleMobileMenu = () : void => {
        setCollapsibleMobileMenuToggle(prevToggle => !prevToggle);
    }

    return (
        <>
            <nav className={'p-5 border-solid border-b-2 border-gray-200'}>
                <div className={'flex flex-row justify-between'}>
                    <div className={'flex flex-row gap-8'}>
                        <LogoSVG className={`tranistion-all duration-500 z-10 fill-current ${collapsibleMobileMenuToggle ? 'text-white' : 'text-black'}`} />
                        <div className={'flex flex-row gap-1 lg:hidden items-center z-10'} onClick={onToggleCollapsibleMobileMenu}>
                            <span className={`font-semibold text-lg transition-all duration-500 ${collapsibleMobileMenuToggle ? 'text-white' : 'text-black'}`}>Menu</span>
                            {
                                collapsibleMobileMenuToggle ? 
                                    <CaretUpSVG className={'fill-current scale-75 mt-1 transition-all duration-500 text-white'} /> : 
                                    <CaretDownSVG className={`fill-current scale-75 mt-1 transition-all duration-500 ${collapsibleMobileMenuToggle ? 'text-white' : 'text-black'}`} /> 
                            }
                        </div>
                        <div className={'hidden lg:flex lg:flex-row lg:gap-6'}>
                            <MainNavBarMenuItem text={'Live'} />
                            <MainNavBarMenuItem text={'Push'} />
                            <MainNavBarMenuItem text={'Link'} />
                            <MainNavBarMenuItem text={'Shop'} />
                            <MainNavBarMenuItem text={'Packs'} />
                            <MainNavBarMenuItem text={'Help'} />
                            <Link href={'#'} passHref className={'flex flex-row items-center'}>
                                <a>
                                    <div onClick={onToggleCollapsibleMore}>
                                        <span className={'text-base font-semibold text-custom-coral'}>
                                            More 
                                        </span>
                                        {
                                            collaspibleMoreToggle ? 
                                                <MinusSVG className={'fill-current text-custom-coral inline'}/> :
                                                <PlusSVG className={'fill-current text-custom-coral inline'}/>
                                        }
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={'hidden lg:flex lg:flex-row lg:gap-8'}>
                        <Link href={'#'} passHref>
                            <a>
                                <span className={'text-xs font-semibold text-custom-blue'}>Try Live for free</span>
                            </a>
                        </Link>
                        <Link href={'#'} passHref>
                            <a>
                                <span className={'text-xs font-semibold text-black'}>Log in or register</span>
                            </a>
                        </Link>
                    </div>
                </div>
                {
                    collaspibleMoreToggle && (
                        <div className={'py-7'}>
                            <h3 className={'text-2xl font-semibold pb-4'}>More on Ableton.com:</h3>
                            <div className={'flex flex-row gap-5'}>
                                <MainNavBarSubMenuItem text={'Blog'} />
                                <MainNavBarSubMenuItem text={'Ableton for the Classroom'} />
                                <MainNavBarSubMenuItem text={'Ableton for Colleges and Universities'} />
                                <MainNavBarSubMenuItem text={'Certified Training'} />
                               <Link href={'#'} passHref className={'pl-6'}>
                                    <a>
                                        <span className={'text-base text-custom-coral'}>About Ableton</span>
                                    </a>
                                </Link>
                                <MainNavBarSubMenuItem text={'Jobs'} />
                                <MainNavBarSubMenuItem text={'Apprenticeships'} />
                            </div>
                            <h3 className={'text-2xl font-semibold pt-8 pb-4'}>More from Ableton:</h3>
                            <div className={'flex flex-row gap-5'}>
                                <Link href={'#'} passHref>
                                   <a>
                                        <div className={'flex flex-col'}>
                                            <h4 className={'text-base font-semibold text-black'}>Loop</h4>
                                            <span className={'text-sm leading-6 text-black'}>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers</span>
                                        </div>
                                   </a>
                                </Link>
                                <Link href={'#'} passHref>
                                    <a>
                                        <div className={'flex flex-col'}>
                                            <h4 className={'text-base font-semibold text-black'}>Learning Music</h4>
                                            <span className={'text-sm leading-6 text-black'}>Learn the fundamentals of music making right in your browser.</span>
                                        </div>
                                    </a>
                                </Link>
                                <Link href={'#'} passHref>
                                   <a>
                                        <div className={'flex flex-col'}>
                                            <h4 className={'text-base font-semibold text-black'}>Learning Synths</h4>
                                            <span className={'text-sm leading-6 text-black'}>Get started with synthesis using Link web-based synth and accompanying lessons.</span>
                                        </div>
                                   </a>
                                </Link>
                                <Link href={'#'} passHref>
                                    <a>
                                        <div className={'flex flex-col'}>
                                            <h4 className={'text-base font-semibold text-black'}>Making Music</h4>
                                            <span className={'text-sm leading-6 text-black'}>Some tips from 74 Creative Strategies for Electronic Producers.</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </nav>
            <nav className={`absolute bg-custom-blue transition-all duration-500 ${collapsibleMobileMenuToggle ? 'top-0': 'top-[-500%]'} p-5 w-full`}>
                <div className={'h-[70px]'}/>
                <MobileMainNavbarMenuitem text={'Live'}/>
                <MobileMainNavbarMenuitem text={'Push'}/>
                <MobileMainNavbarMenuitem text={'Link'}/>
                <MobileMainNavbarMenuitem text={'Shop'}/>
                <MobileMainNavbarMenuitem text={'Packs'}/>
                <MobileMainNavbarMenuitem text={'Try Live for free'}/>
                <Link href={'#'} passHref>
                    <a>
                        <h3 className={'text-white font-normal text-xs pb-6'}>Log in or register</h3>
                    </a>
                </Link>
                <MobileMainNavbarMenuitem text={'More on Ableton.com:'}/>
                <MobileMainNavBarMenuItemSmall text={'Blog'}/>
                <MobileMainNavBarMenuItemSmall text={'Ableton for the Classroom'}/>
                <MobileMainNavBarMenuItemSmall text={'Ableton for Colleges and Universities'}/>
                <MobileMainNavBarMenuItemSmall text={'Certified Training'}/>
                <Link href={'#'} passHref>
                   <a>
                        <h3 className={'text-custom-coral font-normal text-sm pb-4'}>About Ableton</h3>
                   </a>
                </Link>
                <MobileMainNavBarMenuItemSmall text={'Jobs'}/>
                <MobileMainNavBarMenuItemSmall text={'Apprenticeships'}/>
                <div className={'w-full overflow-x-auto scrollbar relative pt-4'}>
                    <MobileMainNavbarMenuitem text={'More from Ableton:'}/>
                    <div className={'flex flex-row gap-5'}>
                        <div className={'min-w-[235px]'}>
                            <h4 className={'text-white font-medium text-xs leading-7'}>Loop</h4>
                            <p className={'text-white font-noraml text-xs leading-5'}>Watch Talks, Performances and Features from Ableton&pos;s Summit for Music Makers</p>
                        </div>
                        <div className={'min-w-[235px]'}>
                            <h4 className={'text-white font-medium text-xs leading-7'}>Learning Music</h4>
                            <p className={'text-white font-noraml text-xs leading-5'}>Watch Talks, Performances and Features from Ableton&pos;s Summit for Music Makers</p>
                        </div>
                        <div className={'min-w-[235px]'}>
                            <h4 className={'text-white font-medium text-xs leading-7'}>Learning Synths</h4>
                            <p className={'text-white font-noraml text-xs leading-5'}>Get starteed with synthesis using a web-based synth andaccompaning lessons.</p>
                        </div>
                        <div className={'min-w-[235px]'}>
                            <h4 className={'text-white font-medium text-xs leading-7'}>Making Music</h4>
                            <p className={'text-white font-noraml text-xs leading-5'}>Some tips 74 Creative Strategries for Electronic Producers </p>
                        </div>
                    </div>
                    <div className={'absolute top-0 left-0 h-full w-full bg-fading-to-blue'}/>
                </div>
            </nav>  
        </>
    )
}

export default MainNavbar;