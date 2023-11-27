import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export function useResizeDetector() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (element === null) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);

  function refCallback(element) {
    setElement(element);
  }

  return { width: size.width, height: size.height, ref: refCallback };
}
