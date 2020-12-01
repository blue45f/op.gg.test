<template>
  <article v-if="league.hasResults">
    <img class="icon" v-bind:src="league.tierRank.imageUrl" />
    <div class="info">
      <p class="a">{{ league.tierRank.name }}</p>
      <p class="b">
        <span class="b-1">탑 </span>(총 <span class="b-2">{{ league.wins + league.losses }}</span
        >게임)
      </p>
      <p class="c">{{ league.tierRank.tier }} {{ league.tierRank.shortString }}</p>
      <p class="d">
        <span class="d-1">{{ league.tierRank.lp }} LP</span><span class="d-2"> / {{ league.wins }}승 {{ league.losses }}패</span>
      </p>
      <p class="e">
        승률
        {{ Math.round((league.wins / (league.wins + league.losses)) * 100) }}%
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { League as LeagueModel } from "../../model/Summoner";

export default class League extends Vue {
  @Prop()
  private league: LeagueModel | undefined;
}
</script>

<style scoped>
article {
  border: solid 1px #cdd2d2;
  border-radius: 2px;
  margin-bottom: 10px;
  height: 124px;
  background-color: #f2f2f2;
  padding-top: 10px;
}

.icon {
  width: 104px;
  float: left;
}

.info {
  float: left;
  padding-top: 10px;
}

.a {
  font-size: 11px;
  color: #879292;
}

.b {
  font-size: 12px;
  color: #353a3a;
}

.b-1 {
  font-weight: bold;
}

.b-2 {
}

.c {
  font-size: 15px;
  font-weight: bold;
  color: #1f8ecd;
}

.d {
  font-size: 12px;
}

.d-1 {
  font-weight: bold;
  color: #555e5e;
}

.d-2 {
  height: 15px;
  margin: 6px 0 2px 2px;
  color: #879292;
}

.e {
  font-size: 12px;
  color: #879292;
}
</style>
