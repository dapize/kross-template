import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ILink } from './Header.d';

const links: ILink[] = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/blog', name: 'Blog' },
  { to: '/portfolio', name: 'Portfolio' },
  { to: '/contact', name: 'Contact' }
];

export const Header = () => {
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const main = useRef<null | HTMLElement>(null);

  const toggleMenu = () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
      setMenuOpened(!menuOpened);
    }
  }

  const fnScroll = () => {
    if ( main ) {
      const rect = (main.current as HTMLElement).getBoundingClientRect();
      const top = rect.top + window.scrollY;
      setNavBg(top > 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fnScroll);

    return () => {
      window.removeEventListener('scroll', fnScroll)
    }
  }, [])


  return (
    <header className={`navigation fixed-top ${ navBg && 'nav-bg' }`} ref={main}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link href="/">
          <a className="navbar-brand font-tertiary h3">
            <Image src="/assets/images/logo.png" alt="Myself" width={77} height={35} layout="raw" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded={menuOpened}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse text-center ${menuOpened && 'show'}`} id="navigation">
          <ul className="navbar-nav ml-auto">
            {
              links.map( (item: ILink, index: number ) => (
                <li className={`nav-item ${ router.pathname === item.to ? 'active' : '' }`} key={`${item.name}-${index}`}>
                  <Link href={item.to}>
                    <a className="nav-link" onClick={toggleMenu}>{item.name}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}
