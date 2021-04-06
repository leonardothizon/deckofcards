<template>
  <div class="deck__card" :class="color">
    <div class="deck__card-top">
      <span class="deck__card-rank">{{ valueToDisplay }}</span>
      <span class="deck__card-suit">{{ suiteSymbol }}</span>
    </div>
    <div class="deck__card-middle">
      {{ suiteSymbol }}
    </div>
    <div class="deck__card-bottom">
      <span class="deck__card-rank">{{ valueToDisplay }}</span>
      <span class="deck__card-suit">{{ suiteSymbol }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/models/Card';
export default defineComponent({
  props: {
    card: {
      type: Card,
      required: true
    },
  },
  mounted() {
    console.log(this.card);
  },
  computed: {
    color():string {
      console.log(this.card.suite);
      return ['D', 'S'].includes(this.card.suite) ? 'black' : 'red';
    },
    suiteSymbol(): string {
      const symbols: Object = {
        H: '♥',
        D: '♦',
        C: '♠',
        S: '♣',
      };
      // @ts-ignore
      return symbols[this.card.suite];
    },
    valueToDisplay(): string {
      return this.card.value === '0' ? '10' : this.card.value;
    },
  }
});
</script>

<style lang="scss">
.deck {
  &__card {
    color: black;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 20px;
    background-color: var(--white);
    border-radius: 10px;
    width: 158px;
    height: 225.6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .red {
    color: red;
  }

  &__card-rank {
    font-family: Inter;
    font-size: 26px;
  }
  &__card-suit {
    font-family: Cousine;
    font-size: 42px;
    line-height: 35px;
  }

  &__card-top {
    width: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  &__card-middle {
    font-size: 60px;
    font-family: Cousine;
    font-weight: bold;
    align-self: center;
  }
  &__card-bottom {
    width: 30px;
    text-align: center;
    align-self: flex-end;
    transform: rotate(180deg);
    display: flex;
    flex-direction: column;
  }
}
</style>
