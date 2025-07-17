import logo1 from '@images/ppl-logo.svg';
import logo2 from '@images/aim-logo.svg';
import logo3 from '@images/prs-logo.svg';

import socialLogo1 from '@images/facebook-logo.svg';
import socialLogo2 from '@images/twitter-logo.svg';
import socialLogo3 from '@images/instagram-logo.svg';
import socialLogo4 from '@images/linkedin-logo.svg';
import socialLogo5 from '@images/pinterest-logo.svg';

import UserIcon from '@images/user-icon.svg';
import MailIcon from '@images/mail-icon.svg';
import MobileIcon from '@images/mobile-icon.svg';

const logos = [logo1, logo2, logo3];
const socialLogos = [
  socialLogo1,
  socialLogo2,
  socialLogo3,
  socialLogo4,
  socialLogo5
];

export default function ContactSection() {
  return (
    <>
      <section className="section-v-pad bg-transparent grid">
        <div className="wrapper division-row-gap grid">
          <div
            className={[
              "w-full !max-w-[750px]",
              "flex flex-wrap justify-evenly items-center",
              "gap-[clamp(2.5rem,0.5rem+5vw,5rem)] mx-auto"
            ].join(" ")}
          >
            {logos.map((Icon, i) => (
              <Icon
                key={i}
                className={[
                  "size-[clamp(60px,2.75rem+2.5vw,80px)] grayscale",
                  "hover:grayscale-0 opacity-40 hover:opacity-100",
                  "transition-all duration-300 ease-in-out cursor-pointer"
                ].join(" ")}
              />
            ))}
          </div>

          <div
            className={[
              "reveal-up grid",
              "lg:grid-cols-3 division-row-gap"
            ].join(" ")}
          >
            <div className="flex flex-col division-row-gap">
              <div className="grid division-in-gap">
                <h2 className="font-semibold !text-2xl">
                  Visit our offices at
                </h2>
                <address
                  className={[
                    "not-italic",
                    "text-dark-light leading-[200%]"
                  ].join(" ")}
                >
                  Identity Music Ltd,<br />
                  Lamberhurst Vineyard, Furnace Lane,<br />
                  Tunbridge Wells, Kent, TN3 8LA, UK
                </address>
              </div>

              <div className="grid division-in-gap">
                <h2 className="font-semibold !text-2xl">
                  Message us
                </h2>
                <a
                  href="mailto:contact@identitymusic.com"
                  className="text-dark-light hover:underline"
                >
                  contact@identitymusic.com
                </a>
                <p className="text-dark-light">
                  (+44) 1892 280 448
                </p>
              </div>

              <div 
                className={[
                  "reveal-up flex flex-wrap",
                  "space-x-5 justify-between lg:mr-20"
                ].join(" ")}
              >
                {socialLogos.map((Icon, i) => (
                  <Icon
                    key={i}
                    className={[
                      "size-5 grayscale hover:grayscale-0",
                      "opacity-40 hover:opacity-100 transition-all",
                      "duration-300 ease-in-out cursor-pointer"
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            <div
              className={[
                "lg:col-span-2 flex-grow",
                "flex flex-col division-gap"
              ].join(" ")}
            >
              <div className="grid md:grid-cols-2 division-gap">
                <label
                  className={[
                    "flex items-center border-b-2",
                    "border-gray-200 focus-within:border-primary"
                  ].join(" ")}
                >
                  <UserIcon className="size-4 fill-gray-500" />
                  <input
                    type="text"
                    placeholder="Name *"
                    className={[
                      "outline-none py-2 px-[20px]",
                      "w-full font-bold placeholder-gray-500"
                    ].join(" ")}
                    required
                  />
                </label>

                <label
                  className={[
                    "flex items-center border-b-2",
                    "border-gray-200 focus-within:border-primary"
                  ].join(" ")}
                >
                  <MailIcon className="size-4 fill-gray-500" />
                  <input
                    type="email"
                    placeholder="Email *"
                    className={[
                      "outline-none py-2 px-[20px]",
                      "w-full font-bold placeholder-gray-500"
                    ].join(" ")}
                    required
                  />
                </label>
              </div>

              <label
                className={[
                  "flex items-center border-b-2",
                  "border-gray-300 focus-within:border-primary"
                ].join(" ")}
              >
                <MobileIcon className="size-4 fill-gray-500" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className={[
                    "outline-none py-2 px-[20px]",
                    "w-full font-bold placeholder-gray-500"
                  ].join(" ")}
                />
              </label>

              <textarea
                rows={4}
                className={[
                  "outline-none py-2 w-full font-bold",
                  "placeholder-gray-500 border-b-2",
                  "border-gray-300 focus-within:border-primary"
                ].join(" ")}
                placeholder="Your message"
              ></textarea>

              <div className="flex flex-wrap md:flex-nowrap">
                <p className="font-semibold text-dark-lighter mr-[110px]">
                  Identity Music are always available and excited to hear from artists and record label prospects. We always aim to serve you and your needs to the best of our ability.
                </p>

                <button
                  className={[
                    "flex-none btn bg-primary text-white w-fit",
                    "h-fit shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]"
                  ].join(" ")}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-[70px]">
        <div className="reveal-up wrapper">
          <div
            className={[
              "flex flex-wrap justify-center",
              "m:justify-between division-gap"
            ].join(" ")}
          >
            <h2 className="text-white w-fit">
              Distribute Your Music Today!
            </h2>
            <div className="flex-none btn bg-white text-dark w-fit">
              Apply Now
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
