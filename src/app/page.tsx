import Accordion from "@/components/Accordion";
import AppImage from "@/components/AppImage";
import BackgroundImage from "@/components/BackgroundImage";
import Banner from "@/components/Banner";
import BlockBox from "@/components/BlockBox";
import BlogBox from "@/components/BlogBox";
import Footer from "@/components/Footer";
import { earning, growth, launching, limitless, vision, creonLogo, nft } from "@/assets";
export default function Home() {
  return (
    <>
      <Banner />
      <div className="xl:py-[136px] py-[100px]">
        <div className='container w-[100%] mx-auto px-4 flex lg:flex-row flex-col'>
          <div className="lg:w-[50%] w-full">
            <h2 className="xl:text-[68px] lg:text-[42px] text-[30px]  font-MonumentExtended uppercase leading-[1.1]">creon pass nft</h2>
            <hr className="border border-[#13171D] mt-[30px]"></hr>
            <p className="grad-text pt-[60px] pb-10 lg:text-[22px] text-[18px]">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
            <ul>
              <li className="px-[18px] py-3 border border-[#13171D] mb-3 rounded-[6px] text-lg text-white">Pre-launch investment opportunities for upcoming AI projects</li>
              <li className="px-[18px] py-3 border border-[#13171D] mb-3 rounded-[6px] text-lg text-white">Free and early access to Creon built AI projects</li>
              <li className="px-[18px] py-3 border border-[#13171D] mb-3 rounded-[6px] text-lg text-white">Higher allocation limits on the Creon AI Launchpad</li>
              <li className="px-[18px] py-3 border border-[#13171D] mb-3 rounded-[6px] text-lg text-white">Revenue share distribution from Creon built AI projects</li>
            </ul>
            <button className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] p-4 w-full rounded-[6px] text-lg text-white font-bold mt-[72px]">
              Buy Creon Pass
            </button>
          </div>
          <div className="lg:w-[50%] w-full lg:mt-0 mt-8">
            <AppImage src={nft} alt="logo" />
          </div>
        </div>
      </div>
      <div className="xl:py-[120px] py-[80px]">
        <div className='container w-[100%] mx-auto px-4'>
          <div className="w-[100%] mb-[80px]">
            <h2 className="xl:text-[68px] lg:text-[42px] text-[30px]  font-MonumentExtended uppercase leading-[1.1]">Profiting Through</h2>
            <p className="grad-text font-MonumentExtended lg:text-[38px] text-[30px] md:text-right text-left">AI Innovation & Decentralization</p>
          </div>
          <div className="flex items-center  lg:flex-row flex-col">
            <div className="lg:w-[70%] md:w-full lg:pr-[40px] pr-0">
              <AppImage className=" rounded-[6px] overflow-hidden" src={creonLogo} alt="creonLogo" />
            </div>
            <div className="lg:w-[30%] md:w-full lg:pl-[30px] pl-0">
              <h4 className="lg:text-[22px] text-[18px] font-bold text-white mb-[28px] lg:mt-0 mt-3">The dynamic community driven business model of the future.</h4>
              <p className="text-lg text-white">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="xl:py-[120px] py-[80px]">
        <div className='container w-[100%] mx-auto px-4 flex  lg:flex-row flex-col'>
          <div className="lg:w-[60%] md:w-full">
            <h2 className="lg:text-[38px] text-[30px] text-white font-bold uppercase lg:w-[75%] w-full font-MonumentExtended">Our vision is to support the innovation of AI blockchain projects <span className="grad-text"> while prioritizing communities and democratizing profits</span></h2>
            <AppImage src={vision} alt="vision" />
          </div>
          <div className="lg:w-[40%] md:w-full">
            <div>
              <Accordion icon={growth} title="Profitability and Growth" />
              <Accordion icon={earning} title="Transparent & Fair Decentralized Earnings" />
              <Accordion icon={launching} title="Launching the future" />
              <Accordion icon={limitless} title="Limitless Possibilities of AI & Crypto" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] xl:pb-[155px] pb-[100px]">
        <div className='container w-[100%] mx-auto px-4 flex gap-10 lg:flex-row flex-col'>
          <BlockBox />
          <BlockBox />
          <BlockBox />
        </div>
      </div>
      <BackgroundImage className='flex flex-col z-[-1] h-full lg:h-[1350px] roadmapImg relative bgGradient'>
        <div className='container w-[100%] mx-auto px-4 flex flex-col space-y-[20px] h-full items-center py-[100px] lg:overflow-visible overflow-auto relative z-10'>
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
        <Footer />
      </BackgroundImage>

    </>
  );
}
