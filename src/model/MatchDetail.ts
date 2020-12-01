export interface MatchDetail {
  gameId: string;
  teams: Team[];
}

export interface Team {
  teamId: number;
  players: Player[];
}

export interface Player {
  champion: Champion;
  summonerId: string;
  summonerName: string;
}

export interface Champion {
  imageUrl: string;
  level: number;
}
