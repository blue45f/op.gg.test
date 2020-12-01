<template>
  <header-component></header-component>

  <summoner v-if="summoner" v-bind:summoner="summoner"></summoner>

  <div id="content-wrap">
    <left-side-contents v-if="summoner && most" v-bind:leagues="summoner.leagues" v-bind:most="most"></left-side-contents>

    <matches v-if="matches && item" v-bind:matches="matches" v-bind:item="item"></matches>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: AppleSDGothicNeo;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

/* clearfix */
#content-wrap {
  margin: 10px auto 0 auto;
  width: 1000px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "@/components/header/Header.vue";
import Summoner from "@/components/summoner/Summoner.vue";
import LeftSideContents from "@/components/most/Most.vue";
import { Summoner as SummonerModel } from "../model/Summoner";
import { SummonerService } from "../service/SummonerService";
import { Most } from "../model/Most";
import { Item } from "../model/Item";
import { Matches as MatchesModel } from "../model/Matches";
import Matches from "@/components/matches/Matches.vue";

@Options({
  components: {
    HeaderComponent,
    Summoner,
    LeftSideContents,
    Matches
  }
})
export default class Main extends Vue {
  private summoner: SummonerModel = null;

  private matches: MatchesModel = null;

  private most: Most = null;

  private item: Item = null;

  private summonerService: SummonerService = new SummonerService();

  public created(): void {
    this.subscribeSummoner();
    this.subscribeMost();
    this.subscribeMatches();
    this.subscribeItem();
  }

  public mounted(): void {
    const summonerName = this.$route.params.summonerName as string;

    this.summonerService.getSummoner(summonerName);
    this.summonerService.getMost(summonerName);
    this.summonerService.getMatches(summonerName);
    this.summonerService.getItem();
  }

  private subscribeSummoner(): void {
    this.summonerService.summoner$.subscribe(
      (summoner: SummonerModel): void => {
        this.summoner = summoner;
        this.setLocalStorageSummoner(summoner);
      },
      () => {
        window.location.href = "http://www.op.gg/summoner";
      }
    );
  }

  private setLocalStorageSummoner(summoner: SummonerModel): void {
    const searchedSummoners: Array<string> = JSON.parse(window.localStorage.getItem("searched_summoners")) || [];

    searchedSummoners.splice(searchedSummoners.indexOf(summoner.name), 1);
    searchedSummoners.unshift(summoner.name);

    window.localStorage.setItem("searched_summoners", JSON.stringify(searchedSummoners));
  }

  private subscribeMost(): void {
    this.summonerService.most$.subscribe((response: Most): void => {
      this.most = response;
    });
  }

  private subscribeMatches(): void {
    this.summonerService.matches$.subscribe((response: MatchesModel): void => {
      this.matches = response;
    });
  }

  private subscribeItem(): void {
    this.summonerService.item$.subscribe((response: Item): void => {
      this.item = response;
    });
  }
}
</script>
