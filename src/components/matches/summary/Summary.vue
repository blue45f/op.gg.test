<template>
  <div style="margin: 0 20px; padding: 18px">
    <p style="font-family: Helvetica; font-size: 12px; width: 90px; text-align: center; margin-bottom: 14px; color: #666666">
      {{ summary.wins + summary.losses }}전 {{ summary.wins }}전 {{ summary.losses }}패
    </p>
    <div style="display: flex">
      <div>
        <svg style="height: 90px; width: 90px" viewBox="0 0 20 20">
          <circle r="10" cx="10" cy="10" fill="#1f8ecd" />
          <circle r="5" cx="10" cy="10" fill="#ee5a52" stroke="#ee5a52" stroke-width="10" v-bind:stroke-dasharray="strokeDasharray" transform="rotate(-90) translate(-20)" />
        </svg>
      </div>
      <div
        style="
          width: 64px;
          height: 64px;
          background-color: #ededed;
          border-radius: 50%;
          position: absolute;
          margin: 13px;
          text-align: center;
          vertical-align: middle;
          line-height: 64px;
          font-family: Helvetica;
          font-size: 14px;
        "
      >
        {{ Math.round((summary.wins / (summary.wins + summary.losses)) * 100) }}%
      </div>
      <div style="width: 100%; margin-top: 21px">
        <p style="font-family: Helvetica; font-size: 11px; text-align: center">{{ summary.kills }} / {{ summary.assists }} / {{ summary.deaths }}</p>
        <p style="font-family: Helvetica; font-size: 16px; text-align: center">
          <span>{{ ((summary.kills + summary.assists) / summary.deaths).toFixed(1) }}: 1</span> <span>({{ Math.round((summary.wins / (summary.wins + summary.losses)) * 100) }}%)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Summary as SummaryModel } from "../../../model/Matches";

export default class Summary extends Vue {
  @Prop()
  private summary: SummaryModel;

  private get strokeDasharray(): string {
    return this.summary.losses + " " + this.summary.losses + this.summary.wins;
  }
}
</script>

<style scoped></style>
