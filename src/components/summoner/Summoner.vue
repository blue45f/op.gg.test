<template>
  <div id="profile-wrap">
    <section class="profile">
      <tags v-bind:previousTiers="summoner.previousTiers"></tags>
      <div class="icon" v-bind:style="{ backgroundImage: `url(${summoner.profileBorderImageUrl})` }">
        <img v-bind:src="summoner.profileImageUrl" />
        <span
          style="
            background-image: url('https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png');
            position: absolute;
            top: 100%;
            left: 50%;
            margin-top: -18px;
            margin-left: -22px;
            width: 44px;
            height: 24px;
            padding-top: 3px;
            background-size: 100%;
            line-height: 17px;
            font-size: 14px;
            text-align: center;
            color: #eabd56;
          "
          >{{ summoner.level }}</span
        >
      </div>
      <div class="info">
        <div class="nickname">{{ summoner.name }}</div>
        <div class="rank">레더 랭킹 {{ summoner.ladderRank.rank }}위 (상위 {{ summoner.ladderRank.rankPercentOfTop }}%)</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import PreviousTiers from "@/components/summoner/PreviousTiers.vue";
import { Summoner as SummonerModel } from "../../model/Summoner";

@Options({
  components: {
    Tags: PreviousTiers
  }
})
export default class Summoner extends Vue {
  @Prop()
  private summoner: SummonerModel;
}
</script>

<style scoped>
#profile-wrap {
  border-bottom: solid 1px #d8d8d8;
}

.profile {
  width: 1000px;
  margin: 0 auto;
}

.profile:after {
  content: "";
  display: block;
  clear: both;
}

.icon {
  width: 120px;
  height: 120px;
  padding: 11px 11px 9px 9px;
  float: left;
  position: relative;
}

.icon img {
  width: 100%;
}

.info {
  float: left;
}

.nickname {
  height: 24px;
  margin: 17px 36px 4px 17px;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.77px;
  color: #242929;
}

.rank {
  height: 13px;
  margin: 4px 6px 82px 17px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
}
</style>
