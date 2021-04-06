import { shallowMount } from "@vue/test-utils";
import ShowDeck from "@/views/ShowDeck.vue";

const mockedCards = [
  {
    id: "7D",
    value: "7",
    suite: "D"
  },
  {
    id: "AS",
    value: "A",
    suite: "S"
  },
  {
    id: "QH",
    value: "Q",
    suite: "H"
  },
  {
    id: "9S",
    value: "9",
    suite: "S"
  },
  {
    id: "6D",
    value: "6",
    suite: "D"
  }
];

const $store = {
  state: {
    rotationCard: {
      id: "2H",
      value: "2",
      suite: "H"
    },
    deckCards: mockedCards
  },
  dispatch: jest.fn()
};

let wrapper = null;

describe("ShowDeck.vue", () => {
  it("should order cards properly", () => {
    const expectedArray = [mockedCards[2], mockedCards[0], mockedCards[4], mockedCards[1], mockedCards[3]];
    wrapper = shallowMount(ShowDeck, {
      props: {},
    });
    wrapper.vm.$store = $store;
    wrapper.vm.orderCardsByRotation();
    expect(wrapper.vm.orderedCards).toStrictEqual(expectedArray);
  });
});
