import { ajax, AjaxResponse } from "rxjs/ajax";
import { map } from "rxjs/operators";
import { Summoner } from "../model/Summoner";
import { Observable, Subject } from "rxjs";
import { Most } from "../model/Most";
import { Matches } from "../model/Matches";
import { MatchDetail } from "../model/MatchDetail";
import { Item } from "../model/Item";
import { injectable } from "inversify";

@injectable()
export class SummonerService {
  private summonerSubject: Subject<Summoner> = new Subject<Summoner>();

  private mostSubject: Subject<Most> = new Subject<Most>();

  private matchesSubject: Subject<Matches> = new Subject<Matches>();

  private matchDetailSubject: Subject<MatchDetail> = new Subject<MatchDetail>();

  private itemSubject: Subject<Item> = new Subject<Item>();

  public get summoner$(): Observable<Summoner> {
    return this.summonerSubject.asObservable();
  }

  public get most$(): Observable<Most> {
    return this.mostSubject.asObservable();
  }

  public get matches$(): Observable<Matches> {
    return this.matchesSubject.asObservable();
  }

  public get matchDetail$(): Observable<MatchDetail> {
    return this.matchDetailSubject.asObservable();
  }

  public get item$(): Observable<Item> {
    return this.itemSubject.asObservable();
  }

  public getSummoner(summonerName: string): void {
    this.ajaxGetSummoner(summonerName)
      .pipe(map((response: AjaxResponse) => response.response.summoner))
      .subscribe(
        (response: Summoner): void => {
          this.summonerSubject.next(response);
        },
        (error: Error): void => {
          console.log(`error`, error);
        }
      );
  }

  public ajaxGetSummoner(summonerName: string): Observable<AjaxResponse> {
    return ajax(`https://codingtest.op.gg/api/summoner/${summonerName}`);
  }

  public getMost(summonerName: string): void {
    ajax(`https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`)
      .pipe(map((response: AjaxResponse) => response.response))
      .subscribe(
        (response: Most) => {
          this.mostSubject.next(response);
        },
        (error: Error): void => {
          console.log(`error`, error);
        }
      );
  }

  public getMatches(summonerName: string): void {
    ajax(`https://codingtest.op.gg/api/summoner/${summonerName}/matches`)
      .pipe(map((response: AjaxResponse) => response.response))
      .subscribe(
        (response: Matches) => {
          this.matchesSubject.next(response);
        },
        (error: Error): void => {
          console.log(`error`, error);
        }
      );
  }

  public getMatchDetail(summonerName: string, gameId: string): void {
    ajax(`https://codingtest.op.gg/api/summoner/${summonerName}/matchDetail/${gameId}`)
      .pipe(map((response: AjaxResponse) => response.response))
      .subscribe(
        (response: MatchDetail) => {
          this.matchDetailSubject.next(response);
        },
        (error: Error): void => {
          console.log(`error`, error);
        }
      );
  }

  public getItem(): void {
    ajax(`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`)
      .pipe(map((response: AjaxResponse) => response.response))
      .subscribe(
        (response: Item) => {
          this.itemSubject.next(response);
        },
        (error: Error): void => {
          console.log(`error`, error);
        }
      );
  }
}
