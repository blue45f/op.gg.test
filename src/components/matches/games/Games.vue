<template>
  <article class="score">
    <ul>
      <game-item v-for="(game, index) in games" v-bind:key="index" v-bind:game="game" v-bind:item="item"></game-item>
    </ul>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Game from "@/components/matches/games/game/Game.vue";
import { Prop } from "vue-property-decorator";
import { Game as GamesModel } from "../../../model/Matches";
import { Item } from "../../../model/Item";

@Options({
  components: {
    GameItem: Game
  }
})
export default class Games extends Vue {
  @Prop()
  private games: GamesModel | undefined;

  @Prop()
  private item: Item | undefined;
}
</script>

<style scoped>
.score {
  margin-top: 16px;
}
</style>
