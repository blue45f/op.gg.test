<template>
  <article>
    <li class="odds-item">
      <img class="b-1" v-bind:src="champion.imageUrl" />
      <div class="b-2-1" style="padding-top: 9px">
        <td>{{ champion.name }}</td>
        <td>{{ ((champion.kills + champion.assists) / champion.deaths).toFixed(1) }}:1 평점</td>
        <td>{{ Math.round((champion.wins / champion.games) * 100) }}%</td>
      </div>
      <div class="b-2-2">
        <td>CS {{ champion.cs }} (2.4)</td>
        <td>
          {{ champion.kills }} / {{ champion.assists }} /
          {{ champion.deaths }}
        </td>
        <td>{{ champion.games }}게임</td>
      </div>
    </li>
  </article>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Champion as ChampionModel } from "../../model/Most";

export default class Champion extends Vue {
  @Prop()
  private champion: ChampionModel;
}
</script>

<style scoped>
.b-1 {
  width: 45px;
  border-radius: 50%;
  float: left;
}

.b-2 {
  float: left;
}

.b-2-1 {
  font-size: 13px;
  font-weight: bold;
  color: #5e5e5e;
}

.b-2-2 {
  font-size: 11px;
  color: #879292;
}

td {
  text-align: center;
  padding-left: 10px;
}

td:first-child {
  text-align: left;
}

.odds-item {
  height: 53px;
  background-color: #ededed;
  border-bottom: solid 1px #cdd2d2;
  padding-top: 4px;
  padding-left: 10px;
}

.odds-item:last-child {
  border-bottom: none;
}
</style>
