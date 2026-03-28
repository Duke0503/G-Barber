export const ROUTES = {
  home:      "/",
  about:     "/ve-chung-toi",
  founders:  "/nguoi-sang-lap",
  price:     "/bang-gia",
  products:  "/san-pham",
  branches:  "/chi-nhanh",
  news:      "/tin-tuc",
  training:  "/dao-tao",
  contact:   "/lien-he",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
