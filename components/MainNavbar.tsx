import Link from 'next/link';
import { useState } from 'react';
import LogoSVG from './svgs/LogoSVG';
import MinusSVG from './svgs/MinusSVG';
import PlusSVG from './svgs/PlusSVG';

const MainNavbar = () => {

    const [collaspibleMenuToggle, setCollapsibleMenuToggle] = useState<boolean>(false);

    const onToggleCollapsibleMenu = () : void => {
        setCollapsibleMenuToggle(prevToggle => !prevToggle);
    }

    return (
        <div className={'p-5 border-solid border-b-2 border-gray-200'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row gap-8'}>
                    <LogoSVG />
                    <Link href={'#'} passHref className={'pl-6'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Live</span>
                    </Link>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-small-bold text-custom-text'}>Push</span>
                    </Link>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-small-bold text-custom-text'}>Link</span>
                    </Link>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-small-bold text-custom-text'}>Shop</span>
                    </Link>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-small-bold text-custom-text'}>Packs</span>
                    </Link>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-small-bold text-custom-text'}>Help</span>
                    </Link>
                    <Link href={'#'} passHref onClick={onToggleCollapsibleMenu} className={'flex flex-row items-center'}>
                        <span className={'text-custom-small-bold text-custom-coral'}>
                            More 
                        </span>
                        {
                            collaspibleMenuToggle ? 
                                <PlusSVG className={'fill-current text-custom-coral inline'}/> :
                                <MinusSVG className={'fill-current text-custom-coral inline'}/>
                        }
                    </Link>
                </div>
                <div className={'flex flex-row gap-8'}>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-extra-small-bold text-custom-blue'}>Try Live for free</span>
                    </Link>
                    <Link href={'#'} passHref>
                        <span className={'text-custom-extra-small-bold text-custom-text'}>Log in or register</span>
                    </Link>
                </div>
            </div>
            {
                collaspibleMenuToggle && (
                    <div className={'py-7'}>
                        <p className={'text-custom-large-bold pb-4'}>More on Ableton.com:</p>
                        <div className={'flex flex-row gap-5'}>
                            <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-text'}>Blog</span>
                            </Link>
                            <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-text'}>Ableton for the Classroom</span>
                            </Link>
                              <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-text'}>Ableton for Colleges and Universities</span>
                            </Link>
                              <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-text'}>Certified Training</span>
                            </Link>
                              <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-coral'}>About Ableton</span>
                            </Link>
                              <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-text'}>Jobs</span>
                            </Link>
                              <Link href={'#'} passHref>
                                <span className={'text-custom-small text-custom-text'}>Apprenticeships</span>
                            </Link>
                        </div>
                        <p className={'text-custom-large-bold text-custom-text pt-7 pb-4'}>More from Ableton:</p>
                        <div className={'flex flex-row gap-5'}>
                            <Link href={'#'} passHref className={'flex flex-col'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Loop</span>
                                <span className={'text-custom-small text-custom-text'}>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers</span>
                            </Link>
                            <Link href={'#'} passHref className={'flex flex-col'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Learning Music</span>
                                <span className={'text-custom-small text-custom-text'}>Learn the fundamentals of music making right in your browser.</span>
                            </Link>
                            <Link href={'#'} passHref className={'flex flex-col'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Learning Synths</span>
                                <span className={'text-custom-small text-custom-text'}>Get started with synthesis using Link web-based synth and accompanying lessons.</span>
                            </Link>
                            <Link href={'#'} passHref className={'flex flex-col'}>
                                <span className={'text-custom-small-bold text-custom-text'}>Making Music</span>
                                <span className={'text-custom-small text-custom-text'}>Some tips from 74 Creative Strategies for Electronic Producers.</span>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MainNavbar;