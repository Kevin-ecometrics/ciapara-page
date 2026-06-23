"use client";

import { useRef, useState, type MouseEvent } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isDragging = useRef(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  function onMouseDown(e: MouseEvent<T>) {
    if (!ref.current) return;
    isDragging.current = true;
    setDragging(true);
    startX.current = e.clientX;
    startScroll.current = ref.current.scrollLeft;
  }

  function onMouseMove(e: MouseEvent<T>) {
    if (!isDragging.current || !ref.current) return;
    ref.current.scrollLeft = startScroll.current - (e.clientX - startX.current);
  }

  function stopDragging() {
    isDragging.current = false;
    setDragging(false);
  }

  return {
    ref,
    dragging,
    handlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp: stopDragging,
      onMouseLeave: stopDragging,
    },
  };
}
