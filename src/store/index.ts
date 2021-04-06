import { createStore } from 'vuex';
import axios from 'axios';
import Card from '@/models/Card';

export default createStore({
  state: {
    deckId: undefined as string | undefined,
    deckCards: [] as Card[],
    rotationCard: {} as Card,
  },
  mutations: {
    setDeck(state, deckId) {
      state.deckId = deckId;
    },
    setRotationCard(state, card) {
      state.rotationCard = card;
    },
    addDeckCard(state, card: Card) {
      state.deckCards.push(card);
    }
  },
  actions: {
    async createNewDeck({ commit }, cards) {
      const newDeckData = await axios.get(`https://deckofcardsapi.com/api/deck/new`);
      const newDeckId = newDeckData.data.deck_id;
      const cardsIds = cards.reduce((total: string, card: Card) => total + card.id + ',', '');
      const parameter = `${cardsIds}`;
      await axios.get(`https://deckofcardsapi.com/api/deck/${newDeckId}/shuffle/?cards=${parameter}`);
      await commit('setDeck', newDeckId);
    },
    async retrieveDeck({ commit }, deckId) {
      const deckData = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=11`);
      if (deckData?.data?.cards?.length) {
        const cards = deckData.data.cards;
        for (let card of cards) {
          commit('addDeckCard', new Card(card.code));
        }
      }
    },
    setRotationCard({ commit }, card: Card) {
      commit('setRotationCard', card);
    }
  },
});
