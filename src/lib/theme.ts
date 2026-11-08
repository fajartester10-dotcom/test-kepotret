export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "kapotret-theme";

/**
 * Inline script for <head>: applies the saved (or system) theme before first paint
 * so there is no light flash for dark-mode visitors.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // storage unavailable (private mode) — theme still applies for this visit
  }
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

/** Switch theme with a circular reveal from `origin`, or a soft color crossfade as fallback. */
export function toggleTheme(origin?: { x: number; y: number }) {
  const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const doc = document as ViewTransitionDoc;

  if (reduceMotion) {
    applyTheme(next);
    return next;
  }

  if (doc.startViewTransition && origin) {
    const { x, y } = origin;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = doc.startViewTransition(() => applyTheme(next));
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .catch(() => {});
    return next;
  }

  root.classList.add("theme-transition");
  applyTheme(next);
  window.setTimeout(() => root.classList.remove("theme-transition"), 550);
  return next;
}
