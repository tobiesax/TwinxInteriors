export type PortfolioItem = { id: string; label: string; src: string };

export type PortfolioCategory = {
  key: string;
  heading: string;
  items: PortfolioItem[];
};
