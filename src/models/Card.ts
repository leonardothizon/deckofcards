import ICard from "./CardInterface";

class Card implements ICard {
  constructor(public id: string) {
    this.value = id[0].toUpperCase();
    this.suite = id[1].toUpperCase();
  }

  value: string;
  suite: string;
}

export default Card;
