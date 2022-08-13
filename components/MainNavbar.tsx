import { useState } from 'react';
import LogoSVG from './svgs/LogoSVG';

const MainNavbar = () => {

    const [collaspibleMenuToggle, setCollapsibleMenuToggle] = useState<boolean>(false);

    const onToggleCollapsibleMenu = () : void => {
        setCollapsibleMenuToggle(prevToggle => !prevToggle);
    }

    return (
        <div className={'p-5 border-solid border-grey-200 border-b-2'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row gap-8'}>
                    <LogoSVG />
                    <a href={'#'} className={'pl-6'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Live</span>
                    </a>
                    <a href={'#'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Push</span>
                    </a>
                    <a href={'#'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Link</span>
                    </a>
                    <a href={'#'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Shop</span>
                    </a>
                    <a href={'#'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Packs</span>
                    </a>
                    <a href={'#'}>
                        <span className={'text-custom-small-bold text-custom-text'}>Help</span>
                    </a>
                    <a href={'#'} onClick={onToggleCollapsibleMenu}>
                        <span className={'text-custom-small-bold text-custom-coral'}>More</span>
                    </a>
                </div>
                <div className={'flex flex-row gap-8'}>
                    <a href={'#'}>
                        <span className={'text-custom-extra-small-bold text-custom-blue'}>Try Live for free</span>
                    </a>
                    <a href={'#'}>
                        <span className={'text-custom-extra-small-bold text-custom-text'}>Log in or register</span>
                    </a>
                </div>
            </div>
            {
                collaspibleMenuToggle && (
                    <div>
                        <p>More on Ableton.com:</p>
                        <div>
                            <a href={'#'}>
                                <span>Blog</span>
                            </a>
                            <a href={'#'}>
                                <span>Ableton for the Classroom</span>
                            </a>
                              <a href={'#'}>
                                <span>Ableton for Colleges and Universities</span>
                            </a>
                              <a href={'#'}>
                                <span>Certified Training</span>
                            </a>
                              <a href={'#'}>
                                <span>About Ableton</span>
                            </a>
                              <a href={'#'}>
                                <span>Jobs</span>
                            </a>
                              <a href={'#'}>
                                <span>Apprenticeships</span>
                            </a>
                        </div>
                        <p>More from Ableton:</p>
                        <div>
                            <div>
                                <a href={'#'}>
                                    <span>Loop</span>
                                    <span>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers</span>
                                </a>
                            </div>
                            <div>
                                <a href={'#'}>
                                    <span>Learning Music</span>
                                    <span>Learn the fundamentals of music making right in your browser.</span>
                                </a>
                            </div>
                            <div>
                                <a href={'#'}>
                                    <span>Learning Synths</span>
                                    <span>Get started with synthesis using a web-based synth and accompanying lessons.</span>
                                </a>
                            </div>
                            <div>
                                <a href={'#'}>
                                    <span>Making Music</span>
                                    <span>Some tips from 74 Creative Strategies for Electronic Producers.</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MainNavbar;