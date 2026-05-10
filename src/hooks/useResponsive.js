import { useEffect, useState } from 'react';
import { checkIsLaptop, getInitialIsLaptop } from '../utils/responsive';

export const useResponsive = () => {
  const [isLaptop, setIsLaptop] = useState(getInitialIsLaptop);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(checkIsLaptop());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLaptop;
};
