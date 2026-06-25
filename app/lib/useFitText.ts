"use client";

import { useLayoutEffect, useRef, useState } from "react";

// Small safety margin so cross-browser differences in glyph-ink vs.
// layout-box measurement (e.g. how letter-spacing trails the last
// character) never push the last letter past the container edge.
const SAFETY_MARGIN = 0.97;

/**
 * Scales a single-line text element's font-size so it exactly fills the
 * width of its container. Use a CSS font-size (e.g. clamp(...)) on the text
 * element as the unstyled/SSR fallback — it's used as the baseline for the
 * very first measurement and shows until JS measures and overrides it.
 */
export function useFitText<
  C extends HTMLElement = HTMLDivElement,
  T extends HTMLElement = HTMLSpanElement,
>() {
  const containerRef = useRef<C>(null);
  const textRef = useRef<T>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    function fit() {
      if (!container || !text) return;
      const containerStyle = getComputedStyle(container);
      const paddingX =
        parseFloat(containerStyle.paddingLeft) +
        parseFloat(containerStyle.paddingRight);
      // Fit to the content box, not the padding box, so the container's own
      // horizontal padding is preserved as a real visual margin.
      const containerWidth = container.offsetWidth - paddingX;
      // text.scrollWidth is useless here: the span is `display: block`, so
      // its layout box already equals the container's width regardless of
      // font-size. Measure the actual glyph ink extent via Range instead.
      const range = document.createRange();
      range.selectNodeContents(text);
      const textWidth = range.getBoundingClientRect().width;
      if (!containerWidth || !textWidth) return;
      const currentFontSize = parseFloat(getComputedStyle(text).fontSize);
      const target =
        (containerWidth / textWidth) * currentFontSize * SAFETY_MARGIN;
      setFontSize(Math.floor(target * 100) / 100);
    }

    fit();

    // Listen on the window, not a ResizeObserver on the container: fitting
    // changes the text's font-size, which changes the container's own
    // height (line-height scales with it), which would otherwise retrigger
    // the observer in a feedback loop that never settles.
    window.addEventListener("resize", fit);
    document.fonts?.ready.then(fit);

    return () => window.removeEventListener("resize", fit);
  }, []);

  return { containerRef, textRef, fontSize };
}
