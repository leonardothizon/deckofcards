<template>
  <main class="deck">
    <div class="deck__container">
      <h1 class="deck__title">Deck of cards</h1>

      <section class="deck__table">
        <div class="deck__cards">
          <BaseCard v-for="card in cards" :key="card.id" :card="card"></BaseCard>
        </div>

        <label class="deck__label">Add cards to the pile</label>
        <div class="deck__input-group">
          <input
            type="text"
            class="deck__input-text deck__input-group__input"
            placeholder="Card name"
            ref="card-input"
            v-model="newCardValue"
            @keydown.enter="addCard"
          />
          <button class="deck__button deck__input-group__button" @click="addCard">Add</button>
        </div>
      </section>

      <section class="deck__control deck__rotation">
        <div>
          <label class="deck__label">Rotation card</label>
          <div class="deck__flex-container">
            <input
              type="text"
              class="deck__input-text"
              placeholder="Card name"
              @keydown.enter="submit"
              v-model="rotationCardValue"
            />
            <button class="deck__button deck__rotation-button" @click="submit">Submit deck</button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import BaseCard from "../components/BaseCard.vue";
import { defineComponent } from "vue";
import Card from "@/models/Card";

export default defineComponent({
  components: {
    BaseCard
  },
  data() {
    return {
      rotationCardValue: undefined as string | undefined,
      newCardValue: undefined as string | undefined,
      cards: [] as Card[],
      rotator: undefined as string | undefined
    };
  },
  methods: {
    addCard() {
      if (this.newCardValue !== undefined && this.newCardValue.length == 2) {
        if (this.cards.length >= 10) {
          alert('You can add up to 10 cards to the table');
          return;
        }
        this.cards.push(new Card(this.newCardValue));
        this.newCardValue = "";
        (this.$refs["card-input"] as HTMLInputElement)?.focus();
      }
    },
    async submit() {
      await this.$store.dispatch("createNewDeck", this.cards);
      const newDeckId = this.$store.state.deckId;
      this.$router.push(`/deck/${newDeckId}/${this.rotationCardValue}`);
    }
  }
});
</script>
