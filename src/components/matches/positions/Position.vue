<template>
  <li style="height: 40px">
    <div>
      <p style="font-family: NanumBarunGothicOTF; font-size: 14px">{{ position.positionName }}</p>
      <p>
        <span style="font-family: Helvetica; font-size: 11px; font-weight: bold; color: #1f8ecd; margin-right: 10px">{{ position.rate }}%</span>
        <span style="font-family: Helvetica; font-size: 11px; color: #666666">승율 {{ Math.round((position.wins / position.games) * 100) }}%</span>
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Position as PositionModel } from "../../../model/Matches";

export default class Position extends Vue {
  @Prop()
  private position: PositionModel;
}
</script>

<style scoped>
* {
  font-size: 11px;
}

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
