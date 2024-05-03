import { earning, growth, launching, limitless, vision } from "@/assets";
import Accordion from "@/components/Accordion";
import AppImage from "@/components/AppImage";
import Banner from "@/components/Banner";
import BlockBox from "@/components/BlockBox";
import BlogBox from "@/components/BlogBox";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="py-[136px]">
        <div className='max-w-[1472px] w-[100%] mx-auto px-4 flex'>
          <div className="w-[50%]">
            <h2 className="">creon pass nft</h2>
            <p>The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
            <ul>
              <li>Pre-launch investment opportunities for upcoming AI projects</li>
              <li>Free and early access to Creon built AI projects</li>
              <li>Higher allocation limits on the Creon AI Launchpad</li>
              <li>Revenue share distribution from Creon built AI projects</li>
            </ul>
          </div>
          <div className="w-[50%]">
            video
          </div>
        </div>
      </div>
      <div className="py-[136px]">
        <div className='max-w-[1472px] w-[100%] mx-auto px-4'>
          <div className="w-[100%] mb-[80px]">
            <h2>Profiting Through</h2>
            <p>AI Innovation & Decentralization</p>
          </div>
          <div className="flex items-center">
            <div className="w-[70%]">
              video
            </div>
            <div className="w-[30%]">
              <h4 className="">The dynamic community driven business model of the future.</h4>
              <p>At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="py-[120px]">
        <div className='max-w-[1472px] w-[100%] mx-auto px-4 flex '>
          <div className="w-[60%]">
            <h2>Our vision is to support the innovation of AI blockchain projects <span> while prioritizing communities and democratizing profits</span></h2>
            <AppImage src={vision} alt="vision" />
          </div>
          <div className="w-[40%]">
            <div>
              <Accordion icon={growth} title="Profitability and Growth" />
              <Accordion icon={earning} title="Transparent & Fair Decentralized Earnings" />
              <Accordion icon={launching} title="Launching the future" />
              <Accordion icon={limitless} title="Limitless Possibilities of AI & Crypto" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[120px]">
        <div className='max-w-[1472px] w-[100%] mx-auto px-4 flex '>
          <BlockBox />
          <BlockBox />
          <BlockBox />
        </div>
      </div>
      <div className="py-[120px]">
        <div className='max-w-[1472px] w-[100%] mx-auto px-4 flex flex-col space-y-[20px]'>
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
      </div>
    </>
  );
}
