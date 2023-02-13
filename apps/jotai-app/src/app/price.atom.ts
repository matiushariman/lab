import { atom } from 'jotai';

export const priceAtom = atom(10, (get, set, newPrice) => {
  set(priceAtom, newPrice);
});
