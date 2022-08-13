import { useState } from 'react';
import LogoSVG from './svgs/LogoSVG';

const MainNavbar = () => {

    const [collaspibleMenuToggle, setCollapsibleMenuToggle] = useState<boolean>(false);

    const onToggleCollapsibleMenu = () : void => {
        setCollapsibleMenuToggle(prevToggle => !prevToggle);
    }

    return (
        <div className={''}>
            <div>
                <div>
                    <LogoSVG />
                    <a href={'#'}>
                        <span>Live</span>
                    </a>
                    <a href={'#'}>
                        <span>Push</span>
                    </a>
                    <a href={'#'}>
                        <span>Link</span>
                    </a>
                    <a href={'#'}>
                        <span>Shop</span>
                    </a>
                    <a href={'#'}>
                        <span>Packs</span>
                    </a>
                    <a href={'#'}>
                        <span>Help</span>
                    </a>
                    <a href={'#'} onClick={onToggleCollapsibleMenu}>
                        <span>More</span>
                    </a>
                </div>
                <div>
                    <a href={'#'}>
                        <span>Try Live for free</span>
                    </a>
                    <a href={'#'}>
                        <span>Log in or register</span>
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