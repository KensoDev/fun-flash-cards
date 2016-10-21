import { Record } from 'immutable'

var InitialState = Record({
  words: {
    "1-10": [
      "The",
      "Is",
      "A",
      "That",
      "It",
      "Of",
      "And",
      "To",
      "You",
      "In",
    ],
    "11-20": [
      "They",
      "He",
      "For",
      "At",
      "As",
      "Was",
      "On",
      "With",
      "His",
      "Are",
    ],
    "21-30": [
      "Be",
      "This",
      "From",
      "I",
      "Or",
      "Have",
      "By",
      "One",
      "Had",
      "Not",
    ],
    "31-40": [
      "Your",
      "But",
      "All",
      "Were",
      "We",
      "When",
      "There",
      "An",
      "Can",
      "What",
    ],
  }
});

const initialState = new InitialState();

export default function words(state = initialState, action) {
  return state;
}
