"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

/**
 * Computes the background-size/background-position needed so an image,
 * drawn on a descendant of `anchorRef` that fills its content box (e.g. a
 * text span with background-clip), lines up exactly with how that same
 * image renders as the `object-cover` background inside `containerRef`.
 * Use this to make a small element look like a window into a full-bleed
 * background image rather than an independent crop.
 *
 * `containerRef` must point at the actual element the cover image fills
 * (not an approximation like the viewport size) — its measured box is the
 * one this math replicates, so the simulated fill and the real image always
 * agree on scale, even when e.g. a scrollbar makes the viewport narrower
 * than `window.innerWidth`.
 *
 * `anchorRef` is used instead of the painted element itself because it may
 * be the more stable reference point (e.g. unaffected by a transient
 * transform on the painted element) — its own padding is accounted for, so
 * the painted descendant can sit inset from it.
 */
export function useCoverFill(
  src: string,
  containerRef: RefObject<HTMLElement | null>,
  anchorRef: RefObject<HTMLElement | null>,
) {
  const [style, setStyle] = useState<{
    backgroundSize: string;
    backgroundPosition: string;
  } | null>(null);

  useLayoutEffect(() => {
    const img = new window.Image();

    function compute() {
      const container = containerRef.current;
      const anchor = anchorRef.current;
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      if (!container || !anchor || !naturalWidth || !naturalHeight) return;

      const containerRect = container.getBoundingClientRect();
      const cw = containerRect.width;
      const ch = containerRect.height;
      const scale = Math.max(cw / naturalWidth, ch / naturalHeight);
      const renderedWidth = naturalWidth * scale;
      const renderedHeight = naturalHeight * scale;
      const imageLeft = containerRect.left + (cw - renderedWidth) / 2;
      const imageTop = containerRect.top + (ch - renderedHeight) / 2;

      const rect = anchor.getBoundingClientRect();
      const anchorStyle = getComputedStyle(anchor);
      const left = rect.left + parseFloat(anchorStyle.paddingLeft);
      const top = rect.top + parseFloat(anchorStyle.paddingTop);
      setStyle({
        backgroundSize: `${renderedWidth}px ${renderedHeight}px`,
        backgroundPosition: `${imageLeft - left}px ${imageTop - top}px`,
      });
    }

    img.src = src;
    if (img.complete) compute();
    else img.onload = compute;

    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [src, containerRef, anchorRef]);

  return style;
}
