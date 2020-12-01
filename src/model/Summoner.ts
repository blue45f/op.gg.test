export interface Summoner {
  name: string;
  level: number;
  profileImageUrl: string;
  profileBorderImageUrl: string;
  url: string;
  leagues: League[];
  previousTiers: PreviousTier[];
  ladderRank: LadderRank;
  profileBackgroundImageUrl: string;
}

export interface LadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface League {
  hasResults: boolean;
  wins: number;
  losses: number;
  tierRank: PreviousTier;
}

export interface PreviousTier {
  name: string;
  tier: string;
  tierDivision: string;
  string: string;
  shortString: string;
  division: string;
  imageUrl: string;
  lp: number;
  tierRankPoint: number;
  season?: number;
}
