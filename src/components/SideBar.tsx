import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

import { FiSun, FiMoon, FiHome, FiAward } from 'react-icons/fi';

import { useTheme } from '../contexts/theme';
import { Container } from '../styles/components/SideBar';

export const SideBar: React.FC = () => {
  const { route } = useRouter();
  const { ToggleTheme, theme } = useTheme();

  function handleClick() {
    ToggleTheme();
    new Audio(theme.title === 'dark' ? '/sounds/turn-off.mp3' : '/sounds/turn-on.mp3').play();
  }

  return (
    <Container>
      <svg
        width="48"
        height="42"
        viewBox="0 0 48 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.2415 0H32.6816L23.9964 42H13.5563L22.2415 0Z" />
        <path d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z" />
        <path d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z" />
      </svg>

      <nav>
        <Link href={'/home'}>
          <a className={route.includes('home') && 'active'}>
            <FiHome size={30} />
          </a>
        </Link>
        <Link href={'/leaderboard'}>
          <a className={route.includes('leaderboard') && 'active'}>
            <FiAward size={30} />
          </a>
        </Link>
      </nav>

      <button type="button" onClick={handleClick}>
        {theme.title === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
      </button>
    </Container>
  );
};
