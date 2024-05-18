import { useState } from 'react';


const useHoverGradient = (hoverGradient: string) => {
  const [hoverStyle, setHoverStyle] = useState<string>('');

  const onMouseOver = () => setHoverStyle(hoverGradient);
  const onMouseOut = () => setHoverStyle('');

  return {
    hoverStyle,
    setHoverStyle,
    onMouseOver,
    onMouseOut,
  };
};

export default useHoverGradient;