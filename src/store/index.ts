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
    async createNewDeck({ commit }, { cards, rotation }) {
      const newDeckData = await axios.get(`https://deckofcardsapi.com/api/deck/new`);
      const newDeckId = newDeckData.data.deck_id;
      const cardsIds = cards.reduce((total: string, card: Card) => total + card.id + ',', '');
      const parameter = `${cardsIds}${rotation}`;
      await axios.get(`https://deckofcardsapi.com/api/deck/${newDeckId}/shuffle/?cards=${parameter}`);
      await commit('setDeck', newDeckId);
    },
    async retrieveDeck({ commit }, deckId) {
      const deckData = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=11`);
      if (deckData?.data?.cards?.[0]) {
        const cards = deckData.data.cards;
        const rotationCard = cards.shift();
        commit('setRotationCard', new Card(rotationCard.code));
        for (let card of cards) {
          commit('addDeckCard', new Card(card.code));
        }
      }
    },
  },
});
