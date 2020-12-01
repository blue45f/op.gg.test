<template>
  <div>
    <p style="font-family: NanumBarunGothicOTF; font-size: 12px; color: #666666; margin-bottom: 20px">선호 포지션 (랭크)</p>
    <ul>
      <position v-for="(position, index) in positions" v-bind:key="index" v-bind:position="position"></position>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Position from "@/components/matches/positions/Position.vue";
import { Prop } from "vue-property-decorator";
import { Position as PositionModel } from "../../../model/Matches";

@Options({
  components: {
    Position
  }
})
export default class Positions extends Vue {
  @Prop()
  private positions: Array<PositionModel>;

  public created(): void {
    const totalGames: number = this.totalGames;

    this.positions.map((position: PositionModel): void => {
      position.rate = position.games / totalGames;
    });
  }

  private get totalGames(): number {
    return this.positions.reduce((accumulator, currentValue): number => accumulator + currentValue.games, 0);
  }
}
</script>

<style scoped></style>
