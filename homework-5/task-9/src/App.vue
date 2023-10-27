<template>
  <div>
    <athlet-manager :general-athlet-list="athletsList" :choosen-athlet-list="choosenAthletList" @choose="onItemChoosen" />
  </div>
</template>
<script>
import { athletsList } from "./constants/9_athletes.js";
import AthletManager from "./components/AthletManager.vue";
export default {
  name: "App",
  components: { AthletManager },
  data() {
    return {
      athletsList,
      choosenAthletList: []
    }
  },
  methods: {
    onItemChoosen({ athletId, general }) {
      let choosenAthlet
      let choosenAthletId
      if (general) {
        choosenAthlet = this.athletsList.find((athlet) => athlet.id === athletId)
        this.choosenAthletList.push(choosenAthlet)
        choosenAthletId = this.athletsList.indexOf(choosenAthlet)
        this.athletsList.splice(choosenAthletId, 1)
      } else {
        choosenAthlet = this.choosenAthletList.find((athlet) => athlet.id === athletId)
        this.athletsList.push(choosenAthlet)
        choosenAthletId = this.choosenAthletList.indexOf(choosenAthlet)
        this.choosenAthletList.splice(choosenAthletId, 1)
      }
    }
  },
};
</script>

<style lang="scss">
@import "./assets/styles/";
</style>
