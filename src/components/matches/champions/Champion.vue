<template>
  <li style="height: 45px">
    <img v-bind:src="champion.imageUrl" />
    <div style="margin: auto 10px">
      <p style="font-family: NanumBarunGothicOTF; font-size: 14px; color: #333333">{{ champion.name }}</p>
      <p style="font-family: Helvetica; font-size: 11px; color: #555555">
        <span>{{ Math.round((champion.wins / champion.games) * 100) }}%</span> ({{ champion.wins }}승 {{ champion.losses }}패)
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Champion as ChampionModel } from "../../../model/Most";

export default class Champion extends Vue {
  @Prop()
  private champion: ChampionModel;
}
</script>

<style scoped>
li {
  display: flex;
}

img {
  height: 34px;
  border-radius: 50%;
}

img,
p {
  margin: auto 0;
}
</style>
