import ICard from "./CardInterface";

class Card implements ICard {
  constructor(public id: string) {

    this.value = id[0];
    this.suite = id[1];
  }

  value: string;
  suite: string;
}

export default Card;
