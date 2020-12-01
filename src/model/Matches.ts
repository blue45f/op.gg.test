import { Champion } from "./Most";

export interface Matches {
  games: Game[];
  champions: Champion[];
  positions: Position[];
  summary: Summary;
}

export interface Game {
  mmr: number | null;
  champion: GameChampion;
  spells: ItemModel[];
  items: ItemModel[];
  needRenew: boolean;
  gameId: string;
  createDate: number;
  gameLength: number;
  gameType: GameType;
  summonerId: string;
  summonerName: SummonerName;
  tierRankShort: TierRankShort;
  stats: Stats;
  mapInfo: null;
  peak: string[];
  isWin: boolean;
}

export interface GameChampion {
  imageUrl: string;
  level: number;
}

export enum GameType {
  전체 = "전체",
  무작위총력전 = "무작위 총력전",
  솔랭 = "솔랭",
  일반 = "일반",
  자유55랭크 = "자유 5:5 랭크"
}

export interface ItemModel {
  imageUrl: string;
}

export interface Stats {
  general: General;
  ward: Ward;
}

export interface General {
  kill: number;
  death: number;
  assist: number;
  kdaString: string;
  cs: number;
  csPerMin: number;
  contributionForKillRate: string;
  goldEarned: number;
  totalDamageDealtToChampions: number;
  largestMultiKillString: LargestMultiKillString;
  opScoreBadge: OpScoreBadge;
}

export enum LargestMultiKillString {
  DoubleKill = "Double Kill",
  Empty = ""
}

export enum OpScoreBadge {
  Ace = "ACE",
  Empty = ""
}

export interface Ward {
  sightWardsBought: number;
  visionWardsBought: number;
}

export enum SummonerName {
  A = "a"
}

export enum TierRankShort {
  C1 = "C1"
}

export interface Position {
  games: number;
  wins: number;
  losses: number;
  position: string;
  positionName: string;
  rate?: number;
}

export interface Summary {
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;
}
