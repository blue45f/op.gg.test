<template>
  <section class="left-content">
    <div v-if="leagues">
      <league v-for="(league, index) in leagues" v-bind:key="index" v-bind:league="league"></league>
    </div>

    <article class="a3">
      <ul class="menu">
        <li class="tag-menu-item">
          <button v-on:click="selectMatches">챔피언 승률</button>
        </li>
        <li class="tag-menu-item active">
          <button v-on:click="selectMost">7일간 랭크 승률</button>
        </li>
      </ul>
      <ul v-if="currentMenu === 'champions'">
        <champion v-for="(item, index) in most.champions" v-bind:key="index" v-bind:champion="item"></champion>
      </ul>
      <ul v-else>
        <recent-win-rate v-for="(item, index) in most.recentWinRate" v-bind:key="index" v-bind:recentWinRate="item"></recent-win-rate>
      </ul>
    </article>
  </section>
</template>

<script lang="ts">
import League from "@/components/most/League.vue";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { League as LeagueModel } from "../../model/Summoner";
import { Champion as ChampionModel, Most, RecentWinRate as RecentWinRateModel } from "../../model/Most";
import Champion from "@/components/most/Champion.vue";
import RecentWinRate from "@/components/most/RecentWinRate.vue";

@Options({
  components: {
    League,
    Champion,
    RecentWinRate
  }
})
export default class LeftSideContents extends Vue {
  @Prop()
  private leagues: Array<LeagueModel>;

  @Prop()
  private most: Most;

  private currentMenu: "champions" | "recentWinRate" = "champions";

  public created(): void {
    this.most.champions.sort((a: ChampionModel, b: ChampionModel) => b.games - a.games);
    this.most.recentWinRate.sort((a: RecentWinRateModel, b: RecentWinRateModel) => b.wins + b.losses - (a.wins + b.losses));
  }

  private selectMatches(): void {
    this.currentMenu = "champions";
  }

  private selectMost(): void {
    this.currentMenu = "recentWinRate";
  }
}
</script>

<style scoped>
.left-content {
  float: left;
  width: 300px;
}

article {
  border: solid 1px #cdd2d2;
}

button {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-weight: bold;
  color: #5e5e5e;
  background-color: #f2f2f2;
}

.active button {
  color: #879292;
}

.menu:after {
  content: "";
  display: block;
  clear: both;
}

.tag-menu-item {
  height: 44px;
  float: left;
  width: 50%;
  border-left: solid 1px #cdd2d2;
  border-bottom: solid 1px #cdd2d2;
  background-color: #f2f2f2;
}

.tag-menu-item:first-child {
  border-left: none;
}
</style>
