import data from "../data/portfolio.json";
import type { Portfolio } from "../types/portfolio";

const portfolio = data as Portfolio;

export function usePortfolio(): Portfolio {
  return portfolio;
}
