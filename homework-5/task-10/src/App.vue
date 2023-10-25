<template>
  <div class="dancers">
    <div class="dancers__container">
      <dancer-boy-list :boys-list="boysList" :title="titles.boys" :message="missingMessages.boys" @choose-boy="onBoyChoosen" />
      <dancer-girl-list :girls-list="girlsList" :title="titles.girls" :message="missingMessages.girls" @choose-girl="onGirlChoosen" />
    </div>
    <button type="button" :disabled="buttonAddDisabled" class="dancers__add-button" @click="onAddPair">Додати</button>
  </div>
  <div class="pair">
    <div class="pair__container">
      <dancer-pair-list :pairs-list="pairsList" :title="titles.pairs" :message="missingMessages.pairs" @choose-pair="onPairChoosen" />
    </div>
    <button type="button" :disabled="buttonDeletePairDisabled" class="pair__delete-button" @click="onDeletePair">Видалити пару</button>
  </div>
</template>

<script>
const MISSING_MESSAGE = {
  boys: 'Вільних хлопців немає :(',
  girls: 'Вільних дівчат немає :(',
  pairs: 'Пари для танців не сформовані :(',
}
const TITLES = {
  boys: 'Хлопці',
  girls: 'Дівчата',
  pairs: 'Обрані пари'
}
import DancerBoyList from "./components/DancerBoyList.vue";
import DancerGirlList from "./components/DancerGirlList.vue";
import DancerPairList from "./components/DancerPairList.vue";
import { boysList, girlsList } from "./constants/10_dancing_pair.js";
export default {
  name: 'App',
  components: { DancerBoyList, DancerGirlList, DancerPairList },
  data() {
    return {
      boysList,
      girlsList,
      pairsList: [],
      isBoySelected: false,
      isGirlSelected: false,
      isPairSelected: false
    };
  },
  computed: {
    missingMessages() {
      return MISSING_MESSAGE
    },
    titles() {
      return TITLES
    },
    buttonAddDisabled() {
      return this.isBoySelected === false || this.isGirlSelected === false
    },
    buttonDeletePairDisabled() {
      return this.isPairSelected === false
    },
  },
  methods: {
    onBoyChoosen(boyId) {
      if (boyId === null) {
        this.isBoySelected = false
      } else {
        this.isBoySelected = boyId
      }
    },
    onGirlChoosen(girlId) {
      if (girlId === null) {
        this.isGirlSelected = false
      } else {
        this.isGirlSelected = girlId
      }
    },
    onPairChoosen(pairId) {
      if (pairId === null) {
        this.isPairSelected = false
      } else {
        this.isPairSelected = pairId
      }
    },
    deleteGuysFromLists(boyId, girld) {
      this.boysList = this.boysList.filter((boy) => boy.id !== boyId)
      this.girlsList = this.girlsList.filter((girl) => girl.id !== girld)
    },
    addPair(boyId, girlId) {
      const selectedBoy = this.boysList.find((boy) => boy.id === boyId)
      const selectedGirl = this.girlsList.find((girl) => girl.id === girlId)
      const newPair = {
        id: Date.now(),
        boyName: selectedBoy.name,
        girlName: selectedGirl.name
      }
      this.pairsList.push(newPair)
    },
    onAddPair() {
      if (this.isBoySelected === false && this.isGirlSelected === false) {
        return
      }
      const boyId = this.isBoySelected
      const girlId = this.isGirlSelected

      this.addPair(boyId, girlId)

      this.deleteGuysFromLists(boyId, girlId)
      this.isBoySelected = false
      this.isGirlSelected = false
    },
    onDeletePair() {
      this.pairsList = this.pairsList.filter((pair) => pair.id !== this.isPairSelected)
      this.isPairSelected = false
    }
  },

}
</script>

<style lang="css">
.dancers {
  display: flex;
  align-items: center;
  flex-direction: column;

}

.dancers__container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}


.boys__item:hover,
.girls__item:hover,
.pair__item:hover {
  border: 1px solid blue;
}

.boys__item,
.girls__item,
.pair__item {}

.empty {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: rgb(146, 28, 28);
}

.title {
  text-align: center;
  font-size: 26px;
}

.girls,
.boys {
  flex: 1 1 50%;
  padding: 20px;
  border: 1px solid cyan;
}

.pair {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pair__delete-button {
  align-self: center;
}
</style>
