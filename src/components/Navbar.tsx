'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import Brand from '@images/brand-logo.png';
import MenuIcon from '@images/menu-icon.svg';
import CloseIcon from '@images/close-icon.svg';

const navMenus = [
  'Home',
  'About',
  'Services',
  'Contact',
  'Blog',
  'Login'
];

export default function Navbar() {

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    const onScroll = () => {
      if (nav) nav.classList.toggle('bg-black', scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = (open: boolean) => {
    const navMenu = document.getElementById('nav-menu');
    const navMenuOpen = document.getElementById('nav-menu-open-btn');
    const navMenuClose = document.getElementById('nav-menu-close-btn');

    if (navMenu && navMenuOpen && navMenuClose) {
      navMenuOpen.style.display = open ? 'none' : 'block';
      navMenuClose.style.display = open ? 'block' : 'none';
      navMenu.classList.toggle('!flex', open);
      document.body.classList.toggle('overflow-hidden', open);
      document.body.classList.toggle('md:overflow-auto', open);
    }
  };

  return (
    <nav className="navbar fixed top-0 z-[999] shadow-md w-full flex items-center justify-center max-w-[100vw] py-[15px] md:py-[22px]">
      <div className="wrapper inline-flex items-center gap-5 justify-between font-semibold text-secondary-light w-full">
        <div className="flex items-center justify-between w-full mr-auto">
          <Link href="/" aria-label="home">
            <Image
              src={Brand}
              alt="Brand Logo"
              className="w-[clamp(110px,4.018rem+5.952vw,150px)] h-fit object-contain"
              width={150}
              height={60}
              priority
            />
          </Link>
          <div
            id="nav-menu"
            className="fixed md:static left-0 top-[94px] hidden md:flex items-center flex-col md:flex-row gap-[clamp(0.625rem,-1.125rem+4.375vw,2.813rem)] px-[min(100px,6vw)] md:px-0 py-5 md:py-0 w-full md:w-auto h-full bg-white md:bg-transparent"
          >
            {navMenus.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-fit !py-3 md:py-0 text-black md:text-white cursor-pointer"
              >
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </div>
            ))}

            <div className="btn !py-[15px] !px-[32px] mr-auto h-fit bg-primary text-white cursor-pointer">
              Apply
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            id="nav-menu-open-btn"
            aria-label="open navbar menu"
            className="block size-12 p-[7px] select-none cursor-pointer"
            onClick={() => toggleMenu(true)}
          >
            <MenuIcon className="fill-white" />
          </button>

          <button
            id="nav-menu-close-btn"
            aria-label="Close navbar menu"
            className="hidden size-12 p-[11px] select-none cursor-pointer"
            onClick={() => toggleMenu(false)}
          >
            <CloseIcon className="fill-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
