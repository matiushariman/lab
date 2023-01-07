import _create, { StateCreator } from 'zustand';

const resetters: (() => void)[] = [];

export const createResettableStore = (<T>(f: StateCreator<T> | undefined) => {
  if (f === undefined) return createResettableStore;
  const store = _create(f);
  const initialState = store.getState();
  resetters.push(() => {
    store.setState(initialState, true);
  });
  return store;
}) as typeof _create;

export const resetAllStores = () => {
  for (const resetter of resetters) {
    resetter();
  }
};
