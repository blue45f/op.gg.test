<template>
  <ul>
    <champion v-for="(champion, index) in champions" v-bind:key="index" v-bind:champion="champion"></champion>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Champion from "@/components/matches/champions/Champion.vue";
import { Prop } from "vue-property-decorator";
import { Champion as ChampionModel } from "../../../model/Most";

@Options({
  components: {
    Champion
  }
})
export default class Champions extends Vue {
  @Prop()
  private champions: Array<ChampionModel>;
}
</script>

<style scoped></style>
