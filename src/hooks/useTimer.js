import { useState, useEffect } from 'react';

import { calculateTime } from '../utils/calculateTime';

export const useTimer = initialDate => {
  const [timer, setTimer] = useState(calculateTime(initialDate));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => ({...timer, ...calculateTime(initialDate)}));
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, [initialDate]);
  
  return timer;
};
