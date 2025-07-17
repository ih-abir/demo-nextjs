import Image from 'next/image';

import styles from "@styles/homeBlock3.module.scss";

import image1 from '@images/moonwax.jpg';
import image2 from '@images/neolux.jpg';
import image3 from '@images/rebecca.jpg';
import image4 from '@images/leo.jpg';
import image5 from '@images/izabeats.jpg';
import image6 from '@images/rvdy.jpg';
import image7 from '@images/michael.jpg';
import image8 from '@images/kendra.jpg';
import image9 from '@images/mario.jpg';

const items = [
  {
    title: 'Moon Wax',
    intro:
      "Moon Wax are breaking the boundaries of music by drawing influences from everything from old school jazz and RnB to 90's funk and house...",
    img: image1,
  },
  {
    title: 'Neolux',
    intro:
      'Neolux is an independent hardstyle/hard dance producer from Romania...',
    img: image2,
  },
  {
    title: 'Rebecca Mardal',
    intro:
      'Rebecca Mardal is a Swedish guitarist & producer, seamlessly blending calming LoFi beats...',
    img: image3,
  },
  {
    title: 'leo.',
    intro:
      "Through his catchy melodies and honest lyrics, leo.'s music demonstrates a raw interpretation of life...",
    img: image4,
  },
  {
    title: 'IzaBeats',
    intro:
      'With traditional instrumental skills and modern production techniques, IzaBeats stands out...',
    img: image5,
  },
  {
    title: 'RVDY',
    intro:
      'RVDY delivers both cutting-edge electronic tracks as well as cinematic experiences...',
    img: image6,
  },
  {
    title: 'Michael Logozar',
    intro:
      'Michael Logozar is a composer and producer based in the Nashville area...',
    img: image7,
  },
  {
    title: 'Kendra Logozar',
    intro:
      'Modern Classical composer and pianist Kendra Logozar is a fresh and inspiring voice...',
    img: image8,
  },
  {
    title: 'Mario Viñuela',
    intro:
      'Mario Viñuela is a Spanish composer made for film, TV and theatre productions...',
    img: image9,
  },
];

export default function Carousel() {
  return (
    <div className="section-v-pad group">
      <div
        className={[
          "reveal-up wrapper grid",
          "division-gap text-white text-center"
        ].join(" ")}
      >
        <div
          className={[
            "carousel-wrapper flex",
            "items-center gap-5 w-full overflow-hidden"
          ].join(" ")}
        >
          <button
            data-scroll="-1"
            className={[
              styles.arrow,
              "lg:opacity-0 group-hover:opacity-100",
              "transition-all duration-300 ease-in-out"
            ].join(" ")}
          >
            &#10094;
          </button>

          <div
            id="carousel"
            className={[
              "carousel flex-stretch flex",
              "overflow-x-scroll scroll-snap-type-x",
              "scroll-mandatory scroll-smooth gap-[30px] no-scrollbar"
            ].join(" ")}
          >
            {items.map(({ title, intro, img }, i) => (
              <div
                key={i}
                className={[
                  styles.card,
                  "card flex flex-col gap-4",
                  "scroll-snap-align-center flex-[0_0_auto]"
                ].join(" ")}
              >
                <Image
                  className="block sm:hidden w-full h-fit object-cover"
                  src={img}
                  alt={title}
                  width={300}
                  height={200}
                  sizes={[
                    "(max-width: 325px) 235px, (max-width: 425px) 327px",
                    "(max-width: 575px) 465px, 524px",
                  ].join(", ")}
                />
                <Image
                  className="hidden sm:block lg:hidden w-full h-fit object-cover"
                  src={img}
                  alt={title}
                  width={300}
                  height={200}
                  sizes={[
                    "(max-width: 767px) 305px, (max-width: 799px) 320px",
                    "(max-width: 859px) 394px, 422px",
                  ].join(", ")}
                />
                <Image
                  className="hidden lg:block w-full h-fit object-cover"
                  src={img}
                  alt="header-image"
                  width={300}
                  height={200}
                  sizes={"(max-width: 1151px) 310px, 355px"}
                />
                <div className="poppins text-lg font-semibold text-dark">
                  {title}
                </div>
                <div
                  className={[
                    "poppins text-sm leading-[160%]",
                    "text-dark-lighter line-clamp-6"
                  ].join(" ")}
                >
                  {intro}
                </div>
              </div>
            ))}
          </div>

          <button
            data-scroll="1"
            className={[
              styles.arrow,
              "lg:opacity-0 group-hover:opacity-100",
              "transition-all duration-300 ease-in-out"
            ].join(" ")}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
