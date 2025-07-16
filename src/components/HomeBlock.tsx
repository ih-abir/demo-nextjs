
import Link from 'next/link';

import musicIcon from '@images/music-icon.svg';
import copyrightIcon from '@images/copyright-icon.svg';
import globeIcon from '@images/globe-icon.svg';
import bookReaderIcon from '@images/book-reader-icon.svg';

const items = [
  {
    title: 'Digital Music Distribution',
    intro:
      'Distribute your music worldwide using our digital distribution services. Get your music on Spotify, Apple Music, SoundCloud and 80+ platforms with ease, confidence and world class support.',
    img: musicIcon,
    btnTxt: 'Distro my music...',
  },
  {
    title: 'Rights Management Service',
    intro:
      'Protect what matters to you most with our music rights management service. We safeguard your creations and online music from third parties who try to steal your sound!',
    img: copyrightIcon,
    btnTxt: 'Protect my rights...',
  },
  {
    title: 'Music Promotion Service',
    intro:
      'Get discovered, with the help of our music promotion experts! Work with our team to shape your image, plan your path to success and get your music out to the world.',
    img: globeIcon,
    btnTxt: 'Promote my music...',
  },
  {
    title: 'Publishing Administration',
    intro:
      'Get credited and claim your earnings, with the help of our music publishing team! Our team work to get you earnings from the compositions you have been integral to creating.',
    img: bookReaderIcon,
    btnTxt: 'Publish my music...',
  },
];

export default function Services() {
  return (
    <section className="section-v-pad bg-transparent">
      <div className="wrapper division-row-gap grid text-center">
        <div className="reveal-up grid division-gap">
          <div className="text-sm text-primary font-bold tracking-[0.07em]">
            WE LAUNCH YOUR MUSIC INTO THE FUTURE
          </div>
          <h2 className="text-dark">
            At Identity Music we distribute, protect and promote your music
            worldwide. We offer innovative solutions for independent music
            artists and record labels to share their music with the world. Our
            industry leading music services enable you to sell your music
            without all the hassle and daunting upfront fees.
          </h2>
        </div>

        <div className="reveal-up grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ title, intro, img: Icon, btnTxt }, i) => (
            <div
              key={i}
              className="h-full p-2.5 bg-white hover:shadow-[0_2px_30px_rgb(0_0_0_/_0.1)] transition-all duration-350 ease-in-out hover:-translate-y-[3px]"
            >
              <div className="grid division-gap content-between h-full py-[60px] px-[35px] border border-gray-200 hover:border-primary">
                <div className="grid division-in-gap">
                  <Icon className="size-[80px] mx-auto fill-primary" />
                  <div className="poppins text-lg font-semibold text-dark">
                    {title}
                  </div>
                  <div className="text-dark-light">{intro}</div>
                </div>

                <div>
                  <Link
                    href="/"
                    className="poppins text-sm font-bold text-dark hover:text-primary/90 hover:underline"
                  >
                    {btnTxt}
                    <span className="ml-2.5 text-primary !hover:no-underline">
                      🡪
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
