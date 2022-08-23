import { ITEM_ADDED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Amazing Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Little potato', price: 6, quantity: 12 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }

  return state;
};

export default reducer;

//mapDispatchToProps
