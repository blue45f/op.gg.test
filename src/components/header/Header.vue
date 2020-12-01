<template>
  <header>
    <div class="search-wrap">
      <span class="search">
        <input placeholder="소환사명, 챔피언..." v-model="searchText" v-on:keydown.enter="goOnSearch" v-on:click="showSearchedHistory" />

        <button style="border: none; background-color: #ffffff" v-on:click="goOnSearch">
          <img class="btn" src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg" title="프로필 검색 버튼" />
        </button>

        <div v-if="isShowHistory" style="position: absolute; background-color: #1ea1f7; width: 260px; top: 86px; padding: 2px">
          <ul>
            <li v-for="(name, index) in searchedSummoners" v-bind:key="index">
              {{ name }}
            </li>
          </ul>
        </div>
      </span>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {
  private searchText = "";

  private isShowHistory = false;

  private searchedSummoners: Array<string> = [];

  private showSearchedHistory(): void {
    this.searchedSummoners = JSON.parse(window.localStorage.getItem("searched_summoners")) || [];

    if (this.searchedSummoners.length > 0) {
      this.isShowHistory = true;
    }
  }

  private goOnSearch(): void {
    if (this.searchText) {
      this.$router.push({
        name: "Main",
        params: {
          summonerName: this.searchText
        }
      });
    } else {
      window.location.href = "http://www.op.gg/summoner";
    }
  }
}
</script>

<style scoped>
header {
  height: 97px;
  background-color: #1ea1f7;
}

input {
  float: left;
  height: 15px;
  width: 210px;
  font-family: AppleSDGothicNeo;
  margin-left: 12px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #727272;
  border: none;
}

.search-wrap {
  width: 1000px;
  margin: 0 auto;
}

.search {
  float: right;
  margin-top: 53px;
  height: 32px;
  width: 260px;
  border-radius: 2px;
  background-color: #ffffff;
}

.btn {
  float: left;
  height: 13px;
  margin-top: 10px;
}
</style>
