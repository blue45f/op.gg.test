<template>
  <section>
    <article>
      <div class="menu">
        <button v-bind:class="{ active: isActive(GameType.전체) }" v-on:click="filterByTotal">전체</button>
        <button v-bind:class="{ active: isActive(GameType.솔랭) }" v-on:click="filterBySoloGame">솔로게임</button>
        <button v-bind:class="{ active: isActive(GameType.자유55랭크) }" v-on:click="filterByFreeRank">자유랭크</button>
      </div>

      <div class="content">
        <summary-component class="summary" v-bind:summary="matches.summary"></summary-component>
        <champions class="champions" v-bind:champions="matches.champions"></champions>
        <positions class="positions" v-bind:positions="matches.positions"></positions>
      </div>
    </article>

    <games v-bind:games="games" v-bind:item="item"></games>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SummaryComponent from "@/components/matches/summary/Summary.vue";
import Champions from "@/components/matches/champions/Champions.vue";
import positions from "@/components/matches/positions/positions.vue";
import Games from "@/components/matches/games/Games.vue";
import { Prop } from "vue-property-decorator";
import { Game, GameType, Matches as MatchesModel } from "../../model/Matches";
import { Item } from "../../model/Item";

@Options({
  components: {
    SummaryComponent,
    Champions,
    positions,
    Games
  }
})
export default class Matches extends Vue {
  @Prop()
  private matches: MatchesModel;

  @Prop()
  private item: Item;

  private GameType = GameType;

  private gameType: GameType = GameType.전체;

  private get games(): Array<Game> {
    return this.gameType === GameType.전체 ? this.matches.games : this.matches.games.filter((game: Game): boolean => game.gameType === this.gameType);
  }

  private filterByTotal(): void {
    this.gameType = GameType.전체;
  }

  private filterBySoloGame(): void {
    this.gameType = GameType.솔랭;
  }

  private filterByFreeRank(): void {
    this.gameType = GameType.자유55랭크;
  }

  private isActive(gameType: string) {
    return this.gameType === gameType;
  }
}
</script>

<style scoped>
section {
  float: left;
  width: 690px;
  margin-left: 10px;
}

article {
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
}

button {
  border: none;
  background-color: #f2f2f2;
  font-size: 12px;
  margin: 0 12px;
}

button.active {
  color: #1f8ecd;
  border-bottom: solid 2px #1f8ecd;
}

.menu {
  display: flex;
  border-bottom: solid 1px #cdd2d2;
  height: 36px;
  width: 100%;
  font-family: NanumBarunGothicOTF;
}

.content {
  display: flex;
  width: 100%;
  height: 158px;
}

.summary {
  width: 276px;
  border-right: solid 1px #cdd2d2;
  padding: 18px;
}

.champions {
  width: 228px;
  border-right: solid 1px #cdd2d2;
  padding: 8px;
}

.positions {
  width: 184px;
  margin: auto;
  padding-left: 16px;
}
</style>
