import { useEffect, useState } from 'react';
import { COLORS, SCROLL_OFFSETS } from '../config/constants';

export const useScrollBackground = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = COLORS.PRIMARY_BG;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > SCROLL_OFFSETS.BACKGROUND_CHANGE) {
        setBgOpacity(1);
        document.body.style.backgroundColor = COLORS.SECONDARY_BG;
      } else {
        setBgOpacity(0);
        document.body.style.backgroundColor = COLORS.PRIMARY_BG;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundColor = '';
    };
  }, []);

  return bgOpacity;
};
