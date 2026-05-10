import { BREAKPOINTS } from '../config/constants';

export const getInitialIsLaptop = () => {
  const width = document.documentElement.clientWidth || window.innerWidth;
  return width >= BREAKPOINTS.TABLET;
};

export const checkIsLaptop = () => {
  return window.innerWidth >= BREAKPOINTS.TABLET;
};
