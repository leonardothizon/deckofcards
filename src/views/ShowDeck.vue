<template>
  <main class="deck">
    <div class="deck__container">
      <h1 class="deck__title">Deck of cards</h1>

      <section class="deck__table">

        <div class="deck__cards">
          <BaseCard v-for="card in cards" :key="card.id" :card="card"></BaseCard>
        </div>

        <label class="deck__label">Rotation card</label>
        <BaseCard :card="$store.state.rotationCard"></BaseCard>
      </section>

      <section class="deck__control deck__rotation">
        <div>
          <label class="deck__label">Rotation card</label>
          <div class="deck__flex-container">
            <input type="text" class="deck__input-text" placeholder="Card name" />
            <button class="deck__button deck__rotation-button">Submit deck</button>
          </div>
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
  computed: {
    cards(): Card[] {
      return this.$store.state?.deckCards || [];
    },
  },
  async mounted() {
    const deckId = this.$route.params.deckId;
    await this.$store.dispatch('retrieveDeck', deckId);
  },
})
</script>

<style lang="scss">
body {
  background-color: var(--blue-green);
}
.deck {
  &__container {
    max-width: 800px;
    margin: auto;
    padding: 50px 0;
  }

  &__cards {
    margin-bottom: 20px;
    display: flex;
  }

  &__title {
    font-family: Inter;
    font-weight: bold;
    font-size: 52px;
    color: var(--dull-yellow);
    margin: 0;
  }

  &__label {
    font-family: Inter;
    font-weight: bold;
    font-size: 18px;
    color: var(--white);
    display: inline-block;
    margin-bottom: 10px;
  }

  &__table {
    background-color: var(--dark-green-blue);
    border: 1px solid;
    margin: 20px 0;
    padding: 30px;
    border-radius: 10px;
  }

  &__input-text {
    font-family: Inter;
    font-size: 14px;
    border-radius: 3px;
    outline: none;
    border: none;
    background-color: var(--white);
    padding: 10px;
    max-width: 180px;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-family: Inter;
      font-size: 14px;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-family: Inter;
      font-size: 14px;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      font-family: Inter;
      font-size: 14px;
    }
  }

  &__button {
    font-family: Inter;
    font-size: 14px;
    background-color: var(--shamrock);
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 3px;
    padding: 10px;
    &:hover {
      background-color: var(--green-teal);
      cursor: pointer;
    }
  }

  &__input-group {
    display: flex;

    &__input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &__button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border: none;
      margin-left: 1px;
    }
  }

  &__flex-container {
    display: flex;
  }

  &__rotation {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__rotation-button {
    margin-left: 20px;
    padding: 10px 25px;
  }
}
</style>
