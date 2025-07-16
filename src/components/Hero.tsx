"use client";
import Image from "next/image";
import MouseIcon from "@images/mouse-icon.svg";
import HeaderImage from "@images/header-image.jpg";
import HeaderGradient1 from "@images/header-gradient1.png";
import HeaderGradient3 from "@images/header-gradient3.png";


export default function Hero() {
  
  return (
    <div 
      className={[
        "relative flex items-stretch overflow-hidden w-full",
        "h-full sm:aspect-[16/10] md:aspect-[16/9] max-h-screen",
        "py-[95px] lg:py-[clamp(6.875rem,8.567rem+-3.526vw,8.25rem)]"
      ].join(' ')}
    >
      <style jsx>{`
        @keyframes riseAndFadeIn {
          from {
            opacity: 0;
            filter: blur(1px);
            transform: translateY(200px);
            visibility: hidden;
          }
          to {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
            visibility: visible;
          }
        }
        .sunrise-effect {
          opacity: 0;
          transform: translateY(200px);
          visibility: hidden;
          animation: riseAndFadeIn 1.5s ease-in-out forwards;
        }
        .animation-delay-3 {
          animation-delay: 1s;
        }
        .animation-delay-1 {
          animation-delay: 1.35s;
        }
      `}</style>

      <div className="wrapper grid z-[50] text-white">
        <div 
          className={[
            "flex flex-col h-fit gap-5",
            "py-[clamp(1.25rem,-2.75rem+10vw,6.25rem)] md:flex-row"
          ].join(' ')}
        >
          <h1 
            className={[
              "order-2 md:order-1 flex-none font-bold",
              "leading-[110%] text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]"
            ].join(' ')}
          >
            Identity Music
          </h1>

          <div 
            className={[
              "order-1 md:order-2 flex items-center",
              "md:h-[clamp(3.438rem,0.58rem+5.952vw,5.938rem)]"
            ].join(' ')}
          >
            <span className="w-[68px] h-[5px] bg-[#ff5ee1]"></span>
          </div>

          <div 
            className={[
              "order-3 w-fit font-bold leading-[110%]",
              "text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]"
            ].join(' ')}
          >
            <div className="flex-none">Digital Music</div>
            Distribution
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 w-full mt-auto">
          <div className="poppins text-lg">Scroll for more</div>
          <MouseIcon className="fill-white size-7" />
        </div>
      </div>

      <div className="absolute inset-0 z-10 w-full">
        <Image
          src={HeaderImage}
          alt="header-image"
          fill
          className="w-full h-full object-cover"
          sizes={[
            "(max-width: 325px) 325px, (max-width: 415px) 415px",
            "(max-width: 639px) 639px, (max-width: 767px) 767px",
            "(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px"
          ].join(' ')}
          priority
        />
      </div>

      <div 
        className={[
          "sunrise-effect animation-delay-1",
          "absolute z-20 bottom-[80px] right-[15vw]",
          "w-[clamp(9.063rem,5.306rem+18.495vw,27.5rem)]"
        ].join(' ')}
      >
        <Image
          src={HeaderGradient1}
          alt="header-gradient-1"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>

      <div
        className={[
          "sunrise-effect animation-delay-3",
          "absolute z-20 w-[clamp(12.5rem,6.897rem+27.586vw,40rem)]",
          "-bottom-[clamp(7.5rem,3.297rem+20.69vw,28.125rem)] -right-8"
        ].join(' ')}
      >
        <Image
          src={HeaderGradient3}
          alt="header-gradient-3"
          className="w-full h-full object-cover"
          width={110}
          height={110}
        />
      </div>
    </div>
  );
}
