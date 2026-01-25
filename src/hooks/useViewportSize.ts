"use client";

import { useSyncExternalStore } from "react";

interface Size {
  height: number;
  width: number;
}

let snapshot: Size = { width: 0, height: 0 };

function readSize(): Size {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  return { width: window.innerWidth, height: window.innerHeight };
}

function subscribe(onChange: () => void) {
  const update = () => {
    const next = readSize();

    if (next.width !== snapshot.width || next.height !== snapshot.height) {
      snapshot = next;
      onChange();
    }
  };

  window.addEventListener("resize", update);
  window.addEventListener("orientationchange", update);

  update();

  return () => {
    window.removeEventListener("resize", update);
    window.removeEventListener("orientationchange", update);
  };
}

function getSnapshot(): Size {
  return snapshot;
}

function getServerSnapshot(): Size {
  return { width: 0, height: 0 };
}

export function useViewportSize(): Size {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
