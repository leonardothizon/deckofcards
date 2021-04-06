<template>
  <main class="deck">
    <div class="deck__container">
      <h1 class="deck__title">Deck of cards</h1>

      <section class="deck__table">

        <div class="deck__cards">
          <BaseCard v-for="card in cards" :key="card.id" :card="card"></BaseCard>
        </div>

        <label class="deck__label deck__label-yellow">Rotation card</label>
        <BaseCard :card="$store?.state.rotationCard"></BaseCard>
      </section>

      <section class="deck__control deck__sorting">
        <label class="deck__label">Sort cards by</label>
        <div class="deck__flex-container">
          <button class="deck__button deck__rotation-button" @click="orderedCards = []">Input order</button>
          <button class="deck__button deck__rotation-button" @click="orderCardsByRotation">Rotation order</button>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import BaseCard from '../components/BaseCard.vue';
import { defineComponent } from 'vue';
import Card from '@/models/Card';

export default defineComponent({
  components: {
    BaseCard,
  },
  data() {
    return {
      orderedCards: [] as Card[],
    }
  },
  computed: {
    cards(): Card[] {
      return this.orderedCards?.length ? this.orderedCards : this.$store?.state?.deckCards || [];
    },
  },
  async mounted() {
    console.log(this);
    const deckId = this.$route?.params.deckId;
    await this.$store.dispatch('retrieveDeck', deckId);
  },
  methods: {
    orderCardsByRotation(): void {
      const rotationCard: Card = this.$store?.state.rotationCard;

      let cardValueOrder = ['2', 'A', 'K', 'Q', 'J', '0', '9', '8', '7', '6', '5', '4', '3'];
      let cardSuitOrder = ['S', 'C', 'D', 'H'];

      // REMOVE ROTATION CARD VALUES AND ADD TO THE FIRST INDEX TO SET THE MAXIMUM IMPORTANCE
      cardValueOrder.splice(cardValueOrder.indexOf(rotationCard.value), 1);
      cardSuitOrder.splice(cardSuitOrder.indexOf(rotationCard.suite), 1);
      cardValueOrder.unshift(rotationCard.value);
      cardSuitOrder.unshift(rotationCard.suite);

      let cards: Card[] = [...this.$store?.state?.deckCards]; // avoid mutating the array form state
      cards.sort((cardA, cardB) => {
        if (cardA.value !== cardB.value) {
          return cardValueOrder.indexOf(cardA.value) > cardValueOrder.indexOf(cardB.value) ? 1 : -1;
        }
        return cardSuitOrder.indexOf(cardA.suite) > cardSuitOrder.indexOf(cardB.suite) ? 1 : -1;
      });
      this.orderedCards = cards;
    },
  },
})
</script>
