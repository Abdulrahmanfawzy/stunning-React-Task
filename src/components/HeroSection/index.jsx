import React, { useState } from "react";
import heroImg1 from "/data5.png";
import heroImg2 from "/data2.png";
import heroImg3 from "/data3.png";
import heroImg4 from "/data4.png";
import "./HeroSection.css";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentEditable from "react-contenteditable";

function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([
    {
      title: "Elevate Your Business with Smart Web Solutions",
      description:
        "We build high-impact websites that reflect your brand and help you reach more clients. Get a custom online presence that sets you apart and drives success.",
      img: heroImg1,
    },
    {
      title: "Launch Your Online Identity with Confidence",
      description:
        "Create powerful websites tailored to your goals. From design to deployment, we handle everything to boost your credibility and digital reach.",
      img: heroImg2,
    },
    {
      title: "Unlock Growth Through Purposeful Web Design",
      description:
        "Stand out with user-focused websites built for real results. We blend creativity and strategy to deliver solutions that grow your audience and impact.",
      img: heroImg3,
    },
    {
      title: "Craft Your Digital Presence with Confidence",
      description:
        "We help brands express their value through modern websites. Get a beautiful, fast, and responsive site that elevates your image and builds trust.",
      img: heroImg4,
    },
  ]);

  const handleClick = () => {
    setIsAnimating(true);
    setCurrentIndex(Math.floor(Math.random() * data.length));
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="bg-[#340936] relative">
      <div className="w-50 h-50 blur-2xl rounded-full absolute bottom-0 left-0 bg-[#F6DC43]/10"></div>

      <div className="flex-wrap flex-col justify-center flex h-screen lg:flex-row lg:justify-between items-center w-[90%] mx-auto">
        <div className="w-[50%] hidden lg:block relative">
          <img
            src={data[currentIndex].img}
            className={`w-[83%] custom-animation relative z-30 transition-transform duration-100 ease-in-out ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
            loading="lazy"
            alt="hero-section image"
          />

          <div className="overlay w-[80%] z-10 h-full absolute top-8 mx-auto rounded-full blur-xl bg-gradient-to-r from-[#FF2DF1]/20 to-[#F6DC43]/20 animate-pulse"></div>

          <div className="absolute -right-13 z-20 flex gap-4 px-7 py-8 items-center bottom-40 bg-white/5  rounded-2xl backdrop-blur-lg border border-white/10">
            <FontAwesomeIcon
              className="text-xl bg-[#F6DC43] p-3 rounded-xl"
              icon={faArrowTrendUp}
            />
            <div className="space-y-2">
              <section className="text-white">Daily Active Clients</section>
              <section className="text-[#F6DC43]">12000+</section>
            </div>
          </div>
        </div>

        <div className="lg:w-[43%] lg:text-left w-full text-center space-y-2">
          <ContentEditable
            className={`text-xl md:text-5xl leading-tight capitalize bg-gradient-to-r from-[#F6DC43] to-[#FF2DF1] bg-clip-text text-transparent outline-0 font-bold transition-all duration-100 ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
            html={data[currentIndex].title}
            onChange={(e) => {
              const updated = [...data];
              updated[currentIndex].title = e.target.value;
              setData(updated);
            }}
            tagName="h1"
          />

          <ContentEditable
            className={`text-sm md:text-md text-gray-300 mt-2 outline-0 duration-100 ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} `}
            html={data[currentIndex].description}
            onChange={(e) => {
              const updated = [...data];
              updated[currentIndex].description = e.target.value;
              setData(updated);
            }}
            tagName="p"
          />

          <button className="relative mt-3 cursor-pointer mr-3 bg-gradient-to-r from-[#F6DC43] to-[#FF2DF1] text-[#410445] px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#FF2DF1]/30 transition-all duration-300 transform hover:-translate-y-1">
            <a href="#" data-discover="true">
              <span className="relative z-10">Get Started</span>
            </a>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
          </button>

          <button
            onClick={handleClick}
            className="relative cursor-pointer mt-2 border-2 border-[#F6DC43]/50 text-[#F6DC43] px-8 py-4 rounded-xl font-semibold hover:bg-[#F6DC43]/10 hover:border-[#F6DC43] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Regenerate with AI</span>
            <div className="absolute inset-0 bg-[#F6DC43] opacity-0 group-hover:opacity-5 transition-opacity rounded-xl"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
