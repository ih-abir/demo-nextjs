'use client';
import { useEffect } from 'react';

export default function DistributionSection() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.counter');
    counters.forEach((el) => {
      const target = +el.textContent!;
      let current = 0;
      const observer = new IntersectionObserver(([entry], obs) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            el.textContent = (++current).toString();
            if (current === target) clearInterval(interval);
          }, 6);
          obs.unobserve(el);
        }
      });
      observer.observe(el);
    });
  }, []);

  return (
    <div className="reveal-up wrapper section-v-pad">
      <div className="grid lg:grid-cols-2 division-gap">
        <div className="flex flex-col division-gap">
          <div className="poppins text-sm font-bold text-primary">
            DIGITAL MUSIC DISTRIBUTION
          </div>
          <h2 className="text-dark">
            We want the world
            <br /> to hear
            <span className="text-dark-lightest"> your talent.</span>
          </h2>
          <div className="flex flex-wrap items-center division-in-element-gap">
            <div 
              className={[
                "btn bg-primary text-white",
                "shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]"
              ].join(' ')}
            >
              Learn More
            </div>
            <div
              className={[
                "btn bg-white text-dark",
                "shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]"
              ].join(' ')}
            >
              Download our brochure
            </div>
          </div>
        </div>

        <div className="grid division-gap">
          <div className="grid grid-cols-3 division-gap">
            <div
              className={[
                "counter col-span-1 font-bold text-primary",
                "text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]"
              ].join(' ')}
            >
              195
            </div>
            <div className="col-span-2 flex flex-col division-in-element-gap">
              <h3 className="poppins text-lg font-semibold text-dark">
                Countries
              </h3>
              <div>
                Through our established partnerships with the top Digital Service Providers, you can grow your
                audience to all corners of the world. Why should you limit your talent to the local area? Your future
                fans are all over the globe, so it’s time you took the international stage, front and centre! With our
                music services, it’s never been so easy to get your creations heard worldwide!
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 division-gap">
            <div
              className={[
                "counter col-span-1 font-bold text-primary",
                "text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]"
              ].join(' ')}
            >
              84
            </div>
            <div className="col-span-2 flex flex-col division-in-element-gap">
              <h3 className="poppins text-lg font-semibold text-dark">
                Distribution Platforms
              </h3>
              <div>
                Get your music on Spotify, Apple Music, SoundCloud and more, with our distribution services. With
                partnerships with over 80 of the most popular music streaming services, getting your music online is as
                simple as a push of a button. By distributing with Identity Music, you keep full control of your sounds.
                You can choose how many platforms to distribute to, be it all of them or just one. Since we don’t
                charge upfront fees, you won’t be slapped with a huge bill for choosing more!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
