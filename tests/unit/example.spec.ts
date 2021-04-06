import { shallowMount } from "@vue/test-utils";
import ShowDeck from "@/views/ShowDeck.vue";

const mockedCards = [
  {
    id: "3H",
    value: "3",
    suite: "H"
  },
  {
    id: "9C",
    value: "9",
    suite: "C"
  },
  {
    id: "AS",
    value: "A",
    suite: "S"
  },
  {
    id: "5D",
    value: "5",
    suite: "D"
  },
  {
    id: "0H",
    value: "0",
    suite: "H"
  }
];

const $store = {
  state: {
    rotationCard: {
      id: "5H",
      value: "5",
      suite: "H"
    },
    deckCards: mockedCards
  },
  dispatch: jest.fn()
};

let wrapper = null;

describe("ShowDeck.vue", () => {
  it("should order cards properly", () => {
    const expectedArray = [mockedCards[3], mockedCards[2], mockedCards[4], mockedCards[1], mockedCards[0]];
    wrapper = shallowMount(ShowDeck, {
      props: {},
    });
    wrapper.vm.$store = $store;
    wrapper.vm.orderCardsByRotation();
    expect(wrapper.vm.orderedCards).toStrictEqual(expectedArray);
  });
});
