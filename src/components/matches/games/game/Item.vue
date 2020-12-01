<template>
  <div style="position: relative">
    <img style="height: 22px; margin: 1px" v-bind:src="item.imageUrl" v-on:mouseover="showTooltip" v-on:mouseleave="hideTooltip" />
    <div
      style="background-color: #242929; position: absolute; color: #ffffff; text-align: left; bottom: 30px; left: -150px; width: 300px; padding: 20px"
      v-if="isShow"
      v-html="datum.description"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ItemModel } from "../../../../model/Matches";
import { Datum } from "../../../../model/Item";

export default class Item extends Vue {
  @Prop()
  private item: ItemModel;

  @Prop()
  private datum: Datum;

  private isShow = false;

  private showTooltip(): void {
    this.isShow = true;
  }

  private hideTooltip(): void {
    this.isShow = false;
  }
}
</script>

<style scoped></style>
