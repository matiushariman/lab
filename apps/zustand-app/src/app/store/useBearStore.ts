import { createResettableStore } from './createResettableStore';
import { devtools, persist } from 'zustand/middleware';
import {
  createSelectorHooks,
  ZustandHookSelectors,
} from 'auto-zustand-selectors-hook';

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = createResettableStore<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) =>
          set((state) => ({ bears: state.bears + by }), false, 'increase'),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
);

export const selectBearStore = createSelectorHooks(
  useBearStore
) as typeof useBearStore & ZustandHookSelectors<BearState>;
