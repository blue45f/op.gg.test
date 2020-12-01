<template>
  <li v-bind:class="[game.isWin ? 'win' : 'loss']">
    <div style="display: flex; width: 970px">
      <div style="width: 70px; margin: auto 14px">
        <p style="font-weight: bold; text-align: center">
          {{ game.gameType }}
        </p>
        <p style="text-align: center">
          {{ createDate }}
        </p>
        <p style="background: #cea7a7; width: 27px; height: 2px; margin: 0 auto"></p>
        <p style="font-weight: bold; color: #2c709b; text-align: center">
          {{ game.isWin ? "승리" : "패배" }}
        </p>
        <p style="text-align: center">
          {{ gameLength }}
        </p>
      </div>
      <img class="profile" v-bind:src="game.champion.imageUrl" />
      <div style="margin: auto 6px">
        <div>
          <img v-for="(spell, index) in game.spells" v-bind:key="index" v-bind:src="spell.imageUrl" style="height: 22px" />
        </div>

        <div>
          <img v-for="(imgUrl, index) in game.peak" v-bind:key="index" v-bind:src="imgUrl" style="height: 22px" />
        </div>

        <p style="text-align: center">
          {{ game.summonerName }}
        </p>
      </div>

      <div style="width: 80px; margin: auto 0">
        <p style="font-size: 15px; font-weight: bold">
          {{ game.stats.general.kill }} / {{ game.stats.general.assist }} /
          {{ game.stats.general.death }}
        </p>
        <p>{{ game.stats.general.kdaString }} 평점</p>
        <div style="display: flex; text-align: center">
          <div
            v-if="game.stats.general.largestMultiKillString"
            style="border: solid 1px #bf3b36; border-radius: 9px; background-color: #ec4f48; text-align: center; vertical-align: middle; padding: 2px 3px; margin: 0 auto"
          >
            <span style="font-size: 10px; color: #ffffff"> {{ game.stats.general.largestMultiKillString }}</span>
          </div>
          <div
            v-if="game.stats.general.opScoreBadge"
            style="border: solid 1px #bf3b36; border-radius: 9px; background-color: #8c51c5; text-align: center; vertical-align: middle; padding: 2px 3px; margin: 0 auto"
          >
            <span style="font-size: 10px; color: #ffffff"> {{ game.stats.general.opScoreBadge }}</span>
          </div>
        </div>
      </div>

      <div style="margin: auto 0">
        <p>레벨{{ game.champion.level }}</p>
        <p>{{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }}) CS</p>
        <p>킬관여 {{ game.stats.general.contributionForKillRate }}%</p>
      </div>

      <div style="display: flex; width: 108px; margin: auto 6px; flex-flow: wrap">
        <item style="height: 22px; margin: 1px" v-for="(item, index) in game.items" v-bind:key="index" v-bind:item="item" v-bind:datum="getItem(item)"> </item>

        <div style="width: 22px; height: 22px; border-radius: 2px; background-color: #cb9e9a; margin: 1px" v-for="n in 7 - game.items.length" v-bind:key="n"></div>
        <img style="height: 22px; margin: 1px; border-radius: 50%" src="../../../../assets/svg/icon-ward-blue_2.svg" />
      </div>

      <div style="width: 96px; margin: auto 0" v-if="matchDetail">
        <div style="display: flex" v-for="(item, index) in matchDetail.teams[0].players" v-bind:key="index">
          <img style="height: 16px; margin: 1px" v-bind:src="item.champion.imageUrl" />
          <span style="height: 16px; margin: 1px; text-align: left; text-overflow: ellipsis; white-space: nowrap; word-wrap: normal; width: 100px; overflow: hidden">
            {{ item.summonerName }}
          </span>
        </div>
      </div>

      <div style="width: 96px; margin: auto 0" v-if="matchDetail">
        <div style="display: flex" v-for="(item, index) in matchDetail.teams[1].players" v-bind:key="index">
          <img style="height: 16px; margin: 1px" v-bind:src="item.champion.imageUrl" />
          <span style="height: 16px; margin: 1px; text-align: left; text-overflow: ellipsis; white-space: nowrap; word-wrap: normal; width: 100px; overflow: hidden">
            {{ item.summonerName }}
          </span>
        </div>
      </div>
    </div>
    <div style="width: 30px; float: right; border: solid 1px #549dc7; background-color: #7fb0e1"></div>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Datum, Item as ItemDetailModel } from "../../../../model/Item";
import { Game as GameModel, ItemModel } from "../../../..//model/Matches";
import moment, { Duration } from "moment";
import Item from "@/components/matches/games/game/Item.vue";
import { SummonerService } from "../../../../service/SummonerService";
import { MatchDetail } from "../../../../model/MatchDetail";

@Options({
  components: {
    Item
  }
})
export default class Game extends Vue {
  @Prop()
  private game: GameModel;

  @Prop()
  private item: ItemDetailModel;

  private matchDetail: MatchDetail = null;

  private summonerService: SummonerService = new SummonerService();

  get createDate(): string {
    return moment(this.game.createDate * 1000).fromNow();
  }

  get gameLength(): string {
    const duration: Duration = moment.duration(this.game.gameLength, "seconds");

    return `${duration.minutes()}분 ${duration.seconds()}초`;
  }

  public created(): void {
    moment.locale("ko");
    this.subscribeSummonerMatchDetail();
  }

  public mounted(): void {
    if (this.game) {
      this.summonerService.getMatchDetail("a", this.game.gameId);
    }
  }

  private getItem(item: ItemModel): Datum {
    const splitUrl = item.imageUrl.split("/");
    const fullFileName = splitUrl[splitUrl.length - 1];
    const fileName = fullFileName.split(".")[0];

    return this.item.data[fileName];
  }

  private subscribeSummonerMatchDetail(): void {
    this.summonerService.matchDetail$.subscribe((response: MatchDetail): void => {
      this.matchDetail = response;
    });
  }
}
</script>

<style scoped>
* {
  color: #555555;
  font-size: 11px;
  line-height: normal;
  text-align: center;
}

li {
  display: flex;
  height: 96px;
  vertical-align: middle;
  margin-bottom: 8px;
}

li.win {
  background-color: #b0ceea;
}

li.loss {
  background-color: #d6b5b2;
}

.profile {
  height: 46px;
  border-radius: 50%;
  margin: auto 0;
}
</style>
