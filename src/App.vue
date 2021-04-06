<template>
  <router-view/>
</template>

<style lang="scss">
:root {
  --dull-yellow: #efef5f;
  --blue-green: #16775a;
  --blue-green-two: #148060;
  --dark-green-blue: #17644d;
  --dark-blue-grey: #0f3328;
  --shamrock: #02a865;
  --green-teal: #0ebc76;
  --white: #ffffff;
  --warm-grey: #777777;
  --tomato: #e12626;
  --black: #000000;
}

@import url('https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

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
    flex-wrap: wrap;
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

  &__label-yellow {
    color: var(--dull-yellow);
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

  &__sorting {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__rotation-button {
    margin-left: 20px;
    padding: 10px 25px;
  }
}
</style>
