<template>
  <li style="margin: auto 0">
    <img v-bind:src="recentWinRate.imageUrl" />

    <span style="font-family: AppleSDGothicNeo; font-size: 13px; font-weight: bold; color: #5e5e5e; width: 100px">{{ recentWinRate.name }}</span>
    <span style="font-family: Helvetica; font-size: 13px; font-weight: bold; color: #879292; width: 40px"
      >{{ Math.round((recentWinRate.wins / (recentWinRate.losses + recentWinRate.wins)) * 100) }}%
    </span>

    <span class="rate">
      <span
        class="win"
        v-bind:style="{
          width: `${(recentWinRate.wins / (recentWinRate.losses + recentWinRate.wins)) * 100}%`
        }"
      ></span>
      <span
        class="loss"
        v-bind:style="{
          width: `${100 - (recentWinRate.wins / (recentWinRate.losses + recentWinRate.wins)) * 100}%`
        }"
      ></span>
    </span>
  </li>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { RecentWinRate as RecentWinRateModel } from "../../model/Most";

export default class RecentWinRate extends Vue {
  @Prop()
  private recentWinRate: RecentWinRateModel | undefined;
}
</script>

<style scoped>
li {
  display: flex;
  line-height: 48px;
  vertical-align: middle;
  border-bottom: solid 1px #cdd2d2;
}

img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: auto 10px;
}

.rate {
  width: 100px;
  height: 20px;
  display: flex;
  border-radius: 4px;
  border: none;
  margin: auto 0;
}

.win {
  height: 100%;
  background-color: #1f8ecd;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.loss {
  height: 100%;
  background-color: #ee5a52;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
