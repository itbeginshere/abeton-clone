import Head from 'next/head'
import LandingHeader from '../components/LandingHeader'
import MainNavbar from '../components/MainNavbar'
import QuickNavbar from '../components/QuickNavbar'
import SectionOne from '../components/sections/SectionOne'
import SectionThree from '../components/sections/SectionThree'
import SectionTwo from '../components/sections/SectionTwo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alberton Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainNavbar />
        <QuickNavbar />
        <LandingHeader />
        <div className={'mb-20'}/>
        <SectionOne />
        <div className={'mb-20'}/>
        <SectionTwo />
        <div className={'mb-20'}/>
        <SectionThree />
      </main>

      <footer>
      </footer>
    </>
  )
}
