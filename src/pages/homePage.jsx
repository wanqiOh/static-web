import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PresentationImg from '@/assets/IMG/6363a21b881b860f98474969_InterfaceHalf.webp.png';
import CaptivateLogo from '@/assets/SVG/635d19c1e5fc3d8686b32bd0_CaptivateLogo.svg.svg';
import Icon1 from '@/assets/SVG/635d8846e5fc3d4242b856d0_LogoAperture.svg.svg';
import Icon2 from '@/assets/SVG/635d8845f514272da68457d1_LogoNorthStar.svg.svg';
import Icon3 from '@/assets/SVG/635d884670620b9e31cc1f78_LogoTriad.svg.svg';
import Icon4 from '@/assets/SVG/635d8846618e0a1d6ab00497_LogoTransferMedia.svg.svg';
import Icon5 from '@/assets/SVG/635d884660eb5a25b9957967_LogoCubic.svg.svg';
import PitchDeckIcon from '@/assets/SVG/63693e906516f98902548ad9_IconMagnet.svg.svg';
import FinancialReportIcon from '@/assets/SVG/63693e90cff683283c0ad805_IconBank.svg.svg';
import PresentationDeckIcon from '@/assets/SVG/63693e906c32eab66ce59c08_IconPresentation.svg.svg';
import EarningsIcon from '@/assets/SVG/63693e90ed4d327ad00d1c33_IconLightningBolt.svg.svg';
import WebinarsIcon from '@/assets/SVG/63693e90445f9b2033d9c5a4_IconWebinar.svg.svg';
import StaffTrainingIcon from '@/assets/SVG/63693e901fb285698b2cde06_IconBriefcase.svg.svg';
import Analytics from '@/assets/IMG/636055f57d320e671c76f568_InterfaceAnalytics.webp.png';
import Livestream from '@/assets/IMG/636055f50d267a3a7fcc1563_InterfaceLivestream.webp.png';
import Branding from '@/assets/IMG/635daa615f68fe23fe79117d_InterfaceBranding.webp.png';
import AllInOne from '@/assets/IMG/636b9ef5a10ec2f5b9ba631b_InterfaceAllinOne.webp.png';
import DescriptionImage from "@/components/DescriptionImage";
import GridImage from '@/assets/IMG/63639b5badc09d727b0f731c_InterfaceGridImage-p-800.webp.png';
import WomenCafe from '@/assets/IMG/635d0383f5142764d77e6dba_WomaninCafe-p-800.webp.png';
import Coworking from '@/assets/IMG/635d038341528afaedd6e710_CoworkingSpace-p-800.webp.png';
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import ScrollButtons from "@/components/InfiniteScroll";
import PricingCards from "@/components/PricingCard";
import PlusIcon from '@/assets/SVG/635e5c7277408d44cd80dcf1_PlusIcon.svg.svg';
import CloseIcon from '@/assets/SVG/635e6c7277408d44cd80dcf1_CloseIcon.svg.svg';
import LandingCard from "@/components/LandingCard";
import FacebookIcon from '@/assets/SVG/635e74c3c8f1b25431a8b91b_SocialIconFacebook.svg.svg';
import TwitterIcon from '@/assets/SVG/635e74c3f51427a47a8d1acb_SocialIconTwitter.svg.svg';
import InstagramIcon from '@/assets/SVG/635e77c37b758d9b16d0c97b_SocialIconIntragram.svg.svg';
import LinkedInIcon from '@/assets/SVG/635e74c37b758d9b16d0c97b_SocialIconLinkedIn.svg.svg';

const HomePage = () => {
  const buttons = [
    { icon: PitchDeckIcon, label: "Pitch Decks" },
    { icon: FinancialReportIcon, label: "Financial Reports" },
    { icon: PresentationDeckIcon, label: "Presentation Decks" },
    { icon: EarningsIcon, label: "Earnings" },
    { icon: WebinarsIcon, label: "Webinars" },
    { icon: StaffTrainingIcon, label: "Staff Training" },
  ];

  const faqItems = [
    {
      question: "Is Captivate easy to use for a beginner?",
      answer: "Absolutely. Captivate is built with simplicity in mind and is ideal for new users.",
    },
    {
      question: "How is it different than PowerPoint?",
      answer: "Captivate offers dynamic templates, analytics, and collaboration tools beyond traditional slides.",
    },
    {
      question: "How much does it cost to use Captivate?",
      answer: "Pricing starts at $24/month with flexible plans depending on your needs.",
    },
    {
      question: "Is Captivate right for my team?",
      answer: "Yes — Captivate supports team collaboration and content sharing effortlessly.",
    },
    {
      question: "How do I add members to our plan?",
      answer: "Go to your account settings and invite team members via email.",
    },
    {
      question: "How do I contact support?",
      answer: "Our team is available 24/7 via chat or email at support@captivate.io.",
    },
  ];

  const AccordionItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-white/10 py-5">
        <button
          className={`w-full flex justify-between items-center text-left text-white text-lg font-medium bg-transparent border-none outline-none shadow-none hover:none active:none focus:outline-none cursor-default`

          }
          onClick={() => setOpen(!open)}
        >
          {question}
          <span className="text-cyan-400">
            {open ? <img src={CloseIcon} alt="close" className="h-5 w-5 mt-1" /> : <img src={PlusIcon} alt="plus" className="h-5 w-5 mt-1" />}
          </span>
        </button>
        {open && <p className="mt-3 text-white/70 pl-6">{answer}</p>}
      </div>
    );
  };


  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white font-sans">
      <header className="flex justify-between items-center px-20 py-4 bg-gradient-to-r from-[rgba(17,204,168,0.05)] to-[rgba(74,197,223,0.05)]">
        <div className="flex items-center gap-2">
          <img src={CaptivateLogo} alt="Captivate Logo" className="h-8 w-auto" />
        </div>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline text-white">Features</a>
          <a href="#pricing" className="hover:underline text-white">Pricing</a>
          <a href="#faq" className="hover:underline text-white">FAQ</a>
        </nav>
        <div className="flex gap-2">
          <Button
            className="rounded-full px-6 py-2 font-semibold shadow-md transition border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#11CCA8] hover:border-[#11CCA8] hover:bg-[rgba(74,197,223,0.4)]"
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-[#11CCA8] to-[#4AC5DF] text-black rounded-full px-6 py-2 font-semibold shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#11CCA8] hover:border-[#11CCA8] border-2 border-transparent"
          >
            Get Started
          </Button>
        </div>
      </header>

      <section className="py-20 px-20">
        <DescriptionImage
          title="Beautiful presentations"
          description={"Captivate helps you create beautiful, branded\n" +
            "presentation decks and experiences to engage your\n" +
            "audience and potential customers."}
          src={PresentationImg}
          alt="Presentation Image"
        />
      </section>

      <section className="flex items-center justify-between mb-6 px-20 h-[160px] pt-[40px] pb-[32px]">
        {[Icon1, Icon2, Icon3, Icon4, Icon5].map((icon, idx) => (
          <img key={idx} src={icon} alt={`Icon ${idx + 1}`} className="w-[197px] h-[88px] opacity-[0.2]" />
        ))}
      </section>

      <section id="features" className="px-[60px] py-16">
        <SectionHeader
          title="Features"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in laoreet justo lectus a eget vitae. Tellus id pretium."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            image={AllInOne}
            imageAlt="All In One"
            labelWidth={136}
            labelText="ALL-IN-ONE"
            title="Everything you need"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imagePosition="top"
          />
          <FeatureCard
            image={Branding}
            imageAlt="Branding"
            labelWidth={95}
            labelText="DESIGN"
            title="Branding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imagePosition="bottom"
          />
        </div>

        <div className="py-16">
          <DescriptionImage
            title={"Create a beautiful\n" +
              "presentation in minutes"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing\n" +
              "elit. Sed purus eu, non velit ut nisl. Arcu orci id\n" +
              "aliquet elementum in."}
            src={GridImage}
            alt="Grid Image"
            sectionPart="text"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <FeatureCard
            image={Livestream}
            imageAlt="Livestream"
            labelWidth={138}
            labelText="LIVESTREAM"
            title="Broadcast to the world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imagePosition="top"
          />
          <FeatureCard
            image={Analytics}
            imageAlt="Analytics"
            labelWidth={128}
            labelText="ANALYTICS"
            title="Track your performance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imagePosition="bottom"
          />
        </div>
      </section>

      <ScrollButtons buttons={buttons} />

      <div className="px-20 py-16">
        <DescriptionImage
          title={"The perfect\n" +
            "presentation"}
          description={"Lorem ipsum dolor sit amet, consectetur\n" +
            "adipiscing elit. Posuere aliquam lectus duis\n" +
            "feugiat maecenas penatibus."}
          src={WomenCafe}
          alt="Women Cafe"
          sectionPart="list"
        />
      </div>
      <div className="px-20 py-16">
        <DescriptionImage
          title={"All-in-one\n" +
            "platform"}
          description={"Lorem ipsum dolor sit amet, consectetur\n" +
            "adipiscing elit. Posuere aliquam lectus duis\n" +
            "feugiat maecenas penatibus."}
          src={Coworking}
          alt="Coworking"
          sectionPart="list"
        />
      </div>

      <section id="pricing" className="px-20 pt-16 pb-0">
        <SectionHeader
          title="Pricing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in
laoreet justo lectus a eget vitae. Tellus id pretium."
        />
        <PricingCards />
      </section>

      <section id="faq" className="px-20 pt-16 pb-0">
        <h3 className="text-[72px] font-semibold mb-12 text-center">Frequent questions</h3>
        <div className="max-w-4xl mx-auto flex">
          <div className="w-[355px] p-4">
          </div>
          <div className="flex-1 p-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} {...item} />
            ))}
          </div></div>
      </section>

      <div className="px-20 py-16">
        <LandingCard description={"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis mauris, libero tellus nec tortor libero arcu, sapien. Venenatis sit morbi ac amet amet.\""} writer={"Mikayla Smith, Marketing Director"} /></div>
      <div className="px-20 py-16 bg-[#0c111d]">
        <LandingCard description={"Get started today"} writer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et netus enim pellentesque pharetra semper at faucibus neque ac suspendisse."} />
      </div>

      <div className="w-[1216px] h-[91px] space-y-4 px-20 py-16">
        <div className="flex items-center space-x-2">
          <img src={CaptivateLogo} alt="Captivate Logo" className="w-[200px] h-[59px]" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-16">

        <div className="col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="uppercase text-xs font-semibold text-cyan-400 mb-3">Landing Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>Landing page V1</li>
              <li>Landing page V2</li>
              <li>Landing page V3</li>
            </ul>
          </div>

          <div>
            <div className="invisible sm:visible h-5" /> {/* Filler to align title row */}
            <ul className="space-y-2 text-sm">
              <li>Landing page V4</li>
              <li>Landing page V5</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs font-semibold text-cyan-400 mb-3">Utility Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>Log in</li>
              <li>Sign up</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <div className="invisible sm:visible h-5" /> {/* Filler to align title row */}
            <ul className="space-y-2 text-sm">
              <li>Password</li>
              <li>404</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="text-white px-6 py-4">
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
            <img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
            <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
            <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
          </div>
          <p className="text-xs text-gray-400 mt-4 md:mt-0">© 2025. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;