import Link from 'next/link';
import { useState } from 'react';
import CaretDownSVG from './svgs/CaretDownSVG';
import CaretUpSVG from './svgs/CaretUpSVG';
import LogoSVG from './svgs/LogoSVG';
import MinusSVG from './svgs/MinusSVG';
import PlusSVG from './svgs/PlusSVG';

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
            <div className={'p-5 border-solid border-b-2 border-gray-100'}>
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
                        <div className={'hidden lg:flex lg:flex-row lg:gap-8'}>
                            <Link href={'#'} className={'pl-6'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Live</span>
                            </Link>
                            <Link href={'#'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Push</span>
                            </Link>
                            <Link href={'#'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Link</span>
                            </Link>
                            <Link href={'#'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Shop</span>
                            </Link>
                            <Link href={'#'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Packs</span>
                            </Link>
                            <Link href={'#'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Help</span>
                            </Link>
                            <Link href={'#'}  className={'flex flex-row items-center'}>
                                <div onClick={onToggleCollapsibleMore}>
                                    <span className={'text-custom-small-bold text-custom-coral'}>
                                        More 
                                    </span>
                                    {
                                        collaspibleMoreToggle ? 
                                            <MinusSVG className={'fill-current text-custom-coral inline'}/> :
                                            <PlusSVG className={'fill-current text-custom-coral inline'}/>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={'hidden lg:flex lg:flex-row lg:gap-8'}>
                        <Link href={'#'}>
                            <span className={'text-custom-extra-small-bold text-custom-blue'}>Try Live for free</span>
                        </Link>
                        <Link href={'#'}>
                            <span className={'text-custom-extra-small-bold text-custom-text'}>Log in or register</span>
                        </Link>
                    </div>
                </div>
                {
                    collaspibleMoreToggle && (
                        <div className={'py-7'}>
                            <p className={'text-custom-large-bold pb-4'}>More on Ableton.com:</p>
                            <div className={'flex flex-row gap-5'}>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-text'}>Blog</span>
                                </Link>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-text'}>Ableton for the Classroom</span>
                                </Link>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-text'}>Ableton for Colleges and Universities</span>
                                </Link>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-text'}>Certified Training</span>
                                </Link>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-coral'}>About Ableton</span>
                                </Link>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-text'}>Jobs</span>
                                </Link>
                                <Link href={'#'}>
                                    <span className={'text-custom-small text-custom-text'}>Apprenticeships</span>
                                </Link>
                            </div>
                            <p className={'text-custom-large-bold text-custom-text pt-7 pb-4'}>More from Ableton:</p>
                            <div className={'flex flex-row gap-5'}>
                                <Link href={'#'} >
                                    <div className={'flex flex-col'}>
                                        <span className={'text-custom-small-bold text-custom-text'}>Loop</span>
                                        <span className={'text-custom-small text-custom-text'}>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers</span>
                                    </div>
                                </Link>
                                <Link href={'#'}>
                                    <div className={'flex flex-col'}>
                                        <span className={'text-custom-small-bold text-custom-text'}>Learning Music</span>
                                        <span className={'text-custom-small text-custom-text'}>Learn the fundamentals of music making right in your browser.</span>
                                    </div>
                                </Link>
                                <Link href={'#'}>
                                    <div className={'flex flex-col'}>
                                        <span className={'text-custom-small-bold text-custom-text'}>Learning Synths</span>
                                        <span className={'text-custom-small text-custom-text'}>Get started with synthesis using Link web-based synth and accompanying lessons.</span>
                                    </div>
                                </Link>
                                <Link href={'#'}>
                                    <div className={'flex flex-col'}>
                                        <span className={'text-custom-small-bold text-custom-text'}>Making Music</span>
                                        <span className={'text-custom-small text-custom-text'}>Some tips from 74 Creative Strategies for Electronic Producers.</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={`absolute bg-custom-blue transition-all duration-500 ${collapsibleMobileMenuToggle ? 'top-0': 'top-[-500%]'} p-5 w-full`}>
                <div className={'h-[70px]'}/>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-5'}>Live</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-5'}>Push</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-5'}>Link</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-5'}>Shop</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-5'}>Packs</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-5'}>Help</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-6'}>Try Live for free</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-xs pb-6'}>Log in or register</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-semibold text-xl pb-4'}>More on Ableton.com:</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-sm pb-4'}>Blog</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-sm pb-4'}>Ableton for the Classroom</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-sm pb-4'}>Ableton for Colleges and Universities</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-sm pb-4'}>Certified Training</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-custom-coral font-normal text-sm pb-4'}>About Ableton</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-sm pb-4'}>Jobs</p>
                </Link>
                <Link href={'#'}>
                    <p className={'text-white font-normal text-sm pb-8'}>Apprenticeships</p>
                </Link>
                <div className={'w-full overflow-x-auto scrollbar relative'}>
                     <Link href={'#'}>
                        <p className={'text-white font-semibold text-xl pb-4'}>More from Ableton:</p>
                    </Link>
                    <div className={'flex flex-row gap-5'}>
                        <div className={'min-w-[235px]'}>
                            <p className={'text-white font-medium text-xs leading-7'}>Loop</p>
                            <p className={'text-white font-noraml text-xs leading-5'}>Watch Talks, Performances and Features from Ableton&pos;s Summit for Music Makers</p>
                        </div>
                        <div className={'min-w-[235px]'}>
                            <p className={'text-white font-medium text-xs leading-7'}>Learning Music</p>
                            <p className={'text-white font-noraml text-xs leading-5'}>Watch Talks, Performances and Features from Ableton&pos;s Summit for Music Makers</p>
                        </div>
                        <div className={'min-w-[235px]'}>
                            <p className={'text-white font-medium text-xs leading-7'}>Learning Synths</p>
                            <p className={'text-white font-noraml text-xs leading-5'}>Get starteed with synthesis using a web-based synth andaccompaning lessons.</p>
                        </div>
                        <div className={'min-w-[235px]'}>
                            <p className={'text-white font-medium text-xs leading-7'}>Making Music</p>
                            <p className={'text-white font-noraml text-xs leading-5'}>Some tips 74 Creative Strategries for Electronic Producers </p>
                        </div>
                    </div>
                    <div className={'absolute top-0 left-0 h-full w-full bg-fading-to-blue'}/>
                </div>
            </div>  
        </>
    )
}

export default MainNavbar;