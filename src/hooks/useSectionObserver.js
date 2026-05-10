import { useEffect } from 'react';
import { OBSERVER_OPTIONS } from '../config/constants';

export const useSectionObserver = (sectionRefs, setActiveSection) => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, OBSERVER_OPTIONS.SECTION);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sectionRefs, setActiveSection]);
};

export const useAnimationObserver = (sectionRefs) => {
  useEffect(() => {
    const animationObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          entry.target.classList.add('visible');
        }
      });
    };

    const animationObserver = new IntersectionObserver(
      animationObserverCallback,
      OBSERVER_OPTIONS.ANIMATION
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) animationObserver.observe(ref);
    });

    return () => animationObserver.disconnect();
  }, [sectionRefs]);
};
