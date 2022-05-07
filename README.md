# Barona Test

![Barona Logo](https://rakennusinsinoorikilta.fi/wp-content/uploads/2018/02/barona.jpg)

## Getting Started

This project is intended to be used with the latest Active LTS release of NodeJS.

## LOG

```
======================== FIRST ============================
Two of Heart
Two of Diamonds
Two of Club
Two of Spades
Three of Heart
Three of Diamonds
Three of Club
Three of Spades
Four of Heart
Four of Diamonds
Four of Club
Four of Spades
Five of Heart
Five of Diamonds
Five of Club
Five of Spades
Six of Heart
Six of Diamonds
Six of Club
Six of Spades
Seven of Heart
Seven of Diamonds
Seven of Club
Seven of Spades
Eight of Heart
Eight of Diamonds
Eight of Club
Eight of Spades
Nine of Heart
Nine of Diamonds
Nine of Club
Nine of Spades
Ten of Heart
Ten of Diamonds
Ten of Club
Ten of Spades
Jack of Heart
Jack of Diamonds
Jack of Club
Jack of Spades
Queen of Heart
Queen of Diamonds
Queen of Club
Queen of Spades
King of Heart
King of Diamonds
King of Club
King of Spades
Ace of Heart
Ace of Diamonds
Ace of Club
Ace of Spades
undefined
======================== SHUFFLE ============================
Ten of Heart
King of Spades
Six of Heart
Two of Diamonds
Two of Heart
Ten of Club
Five of Club
King of Diamonds
Four of Heart
Seven of Club
Queen of Diamonds
Seven of Heart
Three of Spades
Four of Spades
Jack of Spades
Ace of Spades
King of Heart
Eight of Club
Nine of Spades
Queen of Club
Ace of Heart
Jack of Heart
Six of Spades
Seven of Diamonds
Six of Diamonds
Queen of Spades
Ace of Diamonds
Eight of Diamonds
Two of Club
Nine of Club
Three of Diamonds
Two of Spades
Eight of Spades
Five of Heart
Eight of Heart
Jack of Club
King of Club
Ten of Spades
Seven of Spades
Four of Club
Three of Heart
Ten of Diamonds
Four of Diamonds
Three of Club
Queen of Heart
Five of Spades
Ace of Club
Nine of Diamonds
Six of Club
Jack of Diamonds
Five of Diamonds
Nine of Heart
undefined
======================== CONVERT ============================
Two of Heart
Two of Diamonds
Two of Club
Two of Spades
Three of Heart
Three of Diamonds
Three of Club
Three of Spades
Four of Heart
Four of Diamonds
Four of Club
Four of Spades
Five of Heart
Five of Diamonds
Five of Club
Five of Spades
Six of Heart
Six of Diamonds
Six of Club
Six of Spades
Seven of Heart
Seven of Diamonds
Seven of Club
Seven of Spades
Eight of Heart
Eight of Diamonds
Eight of Club
Eight of Spades
Nine of Heart
Nine of Diamonds
Nine of Club
Nine of Spades
Ten of Heart
Ten of Diamonds
Ten of Club
Ten of Spades
Jack of Heart
Jack of Diamonds
Jack of Club
Jack of Spades
Queen of Heart
Queen of Diamonds
Queen of Club
Queen of Spades
King of Heart
King of Diamonds
King of Club
King of Spades
Queen of Heart
Queen of Diamonds
Queen of Club
Queen of Spades
undefined
{
  Two: 4,
  Three: 4,
  Four: 4,
  Five: 4,
  Six: 4,
  Seven: 4,
  Eight: 4,
  Nine: 4,
  Ten: 4,
  Jack: 4,
  Queen: 8,
  King: 4,
  Ace: 0
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node build/src/main.js`
======================== FIRST ============================
Two of Heart
Two of Diamonds
Two of Club
Two of Spades
Three of Heart
Three of Diamonds
Three of Club
Three of Spades
Four of Heart
Four of Diamonds
Four of Club
Four of Spades
Five of Heart
Five of Diamonds
Five of Club
Five of Spades
Six of Heart
Six of Diamonds
Six of Club
Six of Spades
Seven of Heart
Seven of Diamonds
Seven of Club
Seven of Spades
Eight of Heart
Eight of Diamonds
Eight of Club
Eight of Spades
Nine of Heart
Nine of Diamonds
Nine of Club
Nine of Spades
Ten of Heart
Ten of Diamonds
Ten of Club
Ten of Spades
Jack of Heart
Jack of Diamonds
Jack of Club
Jack of Spades
Queen of Heart
Queen of Diamonds
Queen of Club
Queen of Spades
King of Heart
King of Diamonds
King of Club
King of Spades
Ace of Heart
Ace of Diamonds
Ace of Club
Ace of Spades
======================== SHUFFLE ============================
Four of Heart
Eight of Diamonds
Ten of Club
Nine of Heart
Queen of Diamonds
Ace of Spades
Queen of Spades
Six of Spades
Five of Heart
Queen of Heart
Three of Heart
Jack of Club
Ace of Heart
Jack of Heart
Four of Club
Nine of Club
Eight of Spades
Five of Spades
King of Spades
Six of Heart
Eight of Heart
Ten of Heart
Seven of Club
Three of Spades
King of Club
King of Diamonds
Ace of Club
Nine of Diamonds
Queen of Club
Three of Club
Seven of Heart
Six of Diamonds
Seven of Diamonds
King of Heart
Ten of Spades
Four of Spades
Five of Club
Seven of Spades
Jack of Diamonds
Jack of Spades
Ten of Diamonds
Two of Spades
Two of Heart
Four of Diamonds
Nine of Spades
Two of Club
Eight of Club
Three of Diamonds
Two of Diamonds
Six of Club
Ace of Diamonds
Five of Diamonds
======================== CONVERT ============================
Two of Heart
Two of Diamonds
Two of Club
Two of Spades
Three of Heart
Three of Diamonds
Three of Club
Three of Spades
Four of Heart
Four of Diamonds
Four of Club
Four of Spades
Five of Heart
Five of Diamonds
Five of Club
Five of Spades
Six of Heart
Six of Diamonds
Six of Club
Six of Spades
Seven of Heart
Seven of Diamonds
Seven of Club
Seven of Spades
Eight of Heart
Eight of Diamonds
Eight of Club
Eight of Spades
Nine of Heart
Nine of Diamonds
Nine of Club
Nine of Spades
Ten of Heart
Ten of Diamonds
Ten of Club
Ten of Spades
Jack of Heart
Jack of Diamonds
Jack of Club
Jack of Spades
Queen of Heart
Queen of Diamonds
Queen of Club
Queen of Spades
King of Heart
King of Diamonds
King of Club
King of Spades
Queen of Heart
Queen of Diamonds
Queen of Club
Queen of Spades
{
  Two: 4,
  Three: 4,
  Four: 4,
  Five: 4,
  Six: 4,
  Seven: 4,
  Eight: 4,
  Nine: 4,
  Ten: 4,
  Jack: 4,
  Queen: 8,
  King: 4,
  Ace: 0
}
```

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/HalasProject/ch-bar
cd ch-bar
npm install
npm run build
npm run start
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
