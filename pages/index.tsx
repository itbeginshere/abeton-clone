import Head from 'next/head'
import Footer from '../components/Footer'
import LandingHeader from '../components/LandingHeader'
import MainNavbar from '../components/MainNavbar'
import QuickNavbar from '../components/QuickNavbar'
import SectionFive from '../components/sections/SectionFive'
import SectionFour from '../components/sections/SectionFour'
import SectionOne from '../components/sections/SectionOne'
import SectionSix from '../components/sections/SectionSix'
import SectionThree from '../components/sections/SectionThree'
import SectionTwo from '../components/sections/SectionTwo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alberton Clone</title>
        <meta name="description" content="Albeton Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainNavbar />
        <QuickNavbar />
        <LandingHeader />
        <div className={'mb-14'}/>
        <SectionOne />
        <div className={'mb-14'}/>
        <SectionTwo />
        <div className={'mb-14'}/>
        <SectionThree />
        <div className={'mb-14'}/>
        <SectionFour />
        <div className={'mb-14'}/>
        <SectionFive />
        <div className={'mb-14'}/>
        <SectionSix />
        <div className={'mb-14'}/>
        <Footer />
      </main>

    </>
  )
}
