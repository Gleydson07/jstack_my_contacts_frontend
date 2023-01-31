import { useEffect, useRef, useState } from "react";

export default function useAnimatedUnmount(isOpen) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }

    const handleAnimationEnd = () => {
      setShouldRender(false)
    }

    const elementRef = animatedElementRef.current;
    if (!isOpen && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    }
  }, [isOpen]);

  return {
    shouldRender,
    animatedElementRef
  }
}