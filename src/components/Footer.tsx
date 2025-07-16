import Link from 'next/link';
import Image from 'next/image';

import Brand from '@images/brand-logo.png';

import socialLogo1 from '@images/facebook-logo.svg';
import socialLogo2 from '@images/twitter-logo.svg';
import socialLogo3 from '@images/instagram-logo.svg';
import socialLogo4 from '@images/linkedin-logo.svg';
import socialLogo5 from '@images/pinterest-logo.svg';

const footerLinks = [
  'Music Distribution',
  'Publishing Administration',
  'Rights Management',
  'Promotion',
  'Label Services',
  'Blog',
  'Testimonials',
  'Careers',
  'FAQ',
  'Contact',
];

const socialLogos = [
  socialLogo1,
  socialLogo2,
  socialLogo3,
  socialLogo4,
  socialLogo5
];

export default function Footer() {
  return (
    <footer className="py-[30px] bg-black text-white">
      <div className="wrapper pt-[60px] pb-[30px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 division-gap">
          <div>
            <Image
              src={Brand}
              alt="Brand Logo"
              width={170}
              height={100}
              className="w-[170px] h-fit object-contain"
            />
          </div>

          <div className="flex flex-col division-gap">
            <div className="poppins text-lg font-bold">
              Learn About Identity Music
            </div>
            <ul className="list-none p-0">
              {footerLinks.map((link, idx) => (
                <li key={idx} className="py-2">
                  <Link
                    href="#"
                    className="text-sm text-white hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col division-in-gap lg:col-span-2 lg:pl-10">
            <div className="poppins text-lg font-bold">Contact</div>
            <div className="flex flex-col division-in-element-gap">
              <address className="not-italic leading-[200%]">
                <span className="font-bold">Identity Music Ltd</span>
                <br /> Lamberhurst Vineyard, Furnace Lane,
                <br /> Tunbridge Wells, Kent, TN3 8LA, UK
              </address>
              <a
                href="mailto:contact@identitymusic.com"
                className="hover:underline"
              >
                contact@identitymusic.com
              </a>
              <p>(+44) 1892 280 448</p>
            </div>

            <div className="flex flex-wrap space-x-5 mt-4">
              {socialLogos.map((Icon, idx) => (
                <Icon
                  key={idx}
                  className={[
                    "size-5 fill-white",
                    "hover:fill-primary transition-all",
                    "duration-300 ease-in-out cursor-pointer"
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={[
            "flex flex-wrap justify-between",
            "text-center py-[50px] division-in-element-gap",
            "mt-[clamp(3.75rem,-0.75rem+11.25vw,9.375rem)]",
          ].join(' ')}
        >
          <p className="text-sm">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Identity Music Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
