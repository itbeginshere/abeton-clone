import Head from 'next/head'
import MainSpacer from '../components/custom/spacers/MainSpacer'
import Footer from '../components/custom/root/Footer'
import SectionFive from '../components/sections/SectionFive'
import SectionFour from '../components/sections/SectionFour'
import SectionOne from '../components/sections/SectionOne'
import SectionSix from '../components/sections/SectionSix'
import SectionThree from '../components/sections/SectionThree'
import SectionTwo from '../components/sections/SectionTwo'
import QuickNavbar from '../components/custom/root/QuickNavbar'
import MainNavbar from '../components/custom/root/MainNavbar'
import LandingHeader from '../components/custom/root/LandingHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alberton Clone</title>
        <meta name="description" content="Albeton Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'bg-gray-200'}>
        <div className={'max-w-screen-2xl bg-white mx-auto'}>
          <MainNavbar />
          <QuickNavbar />
          <LandingHeader />
          <MainSpacer />
          <SectionOne />
          <MainSpacer />
          <SectionTwo />
          <MainSpacer />
          <SectionThree />
          <MainSpacer />
          <SectionFour />
          <MainSpacer />
          <SectionFive />
          <MainSpacer />
          <SectionSix />
          <MainSpacer />
          <Footer />
        </div>
      </main>

    </>
  )
}
