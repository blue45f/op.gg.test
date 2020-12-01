<template>
  <ul class="tags">
    <li class="item" v-for="(item, index) in previousTiers" v-bind:key="index">
      <span class="name">{{ item.shortString }} {{ item.tier }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PreviousTier } from "../../model/Summoner";

@Options({
  components: {}
})
export default class PreviousTiers extends Vue {
  @Prop()
  private previousTiers: Array<PreviousTier> | undefined;
}
</script>

<style scoped>
.tags {
  margin-top: 15px;
  margin-bottom: 15px;
}

.item {
  display: inline-block;
  height: 20px;
  margin-left: 7px;
  padding: 4px 5px 3px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
}

.name {
  display: block;
  height: 13px;
  font-family: Helvetica;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
}
</style>
