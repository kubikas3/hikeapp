export interface Item {
  name: string;
  quantity: number;
  weight: number;
}

export type Season = "spring" | "summer" | "fall" | "winter";

export interface HikeInfo {
  distance: number | null;
  season: Season;
  capacity: number;
}