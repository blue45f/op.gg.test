export interface Most {
  champions: Champion[];
  recentWinRate: RecentWinRate[];
}

export interface Champion {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;
  cs: number;
  rank: number;
}

export interface RecentWinRate {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  wins: number;
  losses: number;
}
