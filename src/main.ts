type Card = {
  value: number;
  suit: string;
};

// declare card suits
const suits: string[] = ['Heart', 'Diamonds', 'Club', 'Spades'];

// declare card values
const values: string[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
];

// declare card names
const valuesLetters = {
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
  '11': 'Jack',
  '12': 'Queen',
  '13': 'King',
  '14': 'Ace',
};

// Generate sorted deck cards
const generateDeck = (): Card[] => {
  let deck: Card[] = [];
  values.forEach((value) => {
    suits.forEach((suit) => {
      deck.push({
        value: +value,
        suit,
      });
    });
  });

  return deck;
};

const printReadableDeck = (deckOrignal, step = 'NONE') => {
  console.log(`======================== ${step} ============================`);
  deckOrignal.forEach((card) => {
    console.log(`${valuesLetters[card.value]} of ${card.suit}`);
  });
};

const deckOrignal: Card[] = generateDeck();

// function to print human readable sorted deck
printReadableDeck(deckOrignal, 'FIRST');

// function to shuffle the deck
const shuffle = (array: Card[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
};

// Clone the original deck cards
let shuffleDeck = [...deckOrignal];

// Shuffle the deck
shuffle(shuffleDeck);

printReadableDeck(shuffleDeck, 'SHUFFLE');

// convert Aces into Queens
const convertAces = (deckOrignal) => {
  return deckOrignal.map((card) => {
    if (card.value === 14) {
      card.value = 12;
    }
    return card;
  });
};

const convertedDeck = convertAces(deckOrignal);
printReadableDeck(convertedDeck, 'CONVERT');

const countCards = (deck: Card[]) => {
  let count = {};

  values.forEach((value) => {
    count[valuesLetters[value]] =
      deck.filter((card) => card.value == +value).length || 0;
  });

  return count;
};

console.log(countCards(convertedDeck));
