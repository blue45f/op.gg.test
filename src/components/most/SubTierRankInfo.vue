<template>
  <article class="sub-tier">
    <img class="icon" src="http://opgg-static.akamaized.net/images/medals/gold_4.png?image=c_scale,q_auto&v=1" />
    <div class="c">
      <p class="a">자유 5:5 랭크</p>
      <p class="b">Unranked</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "SubTierRankInfo"
};
</script>

<style scoped>
.sub-tier {
  margin-top: 8px;
  height: 98px;
  padding-top: 17px;
  padding-left: 28px;
  background-color: #f2f2f2;
}

.icon {
  width: 64px;
  height: 64px;
  float: left;
}

.a {
  height: 13px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #879292;
}

.b {
  height: 16px;
  margin: 2px 0 0;
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #879292;
}

.c {
  float: left;
  margin-top: 17px;
  margin-left: 28px;
}
</style>
