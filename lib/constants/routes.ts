export const ROUTES = {
  home:    "/",
  about:   "/about-us",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
