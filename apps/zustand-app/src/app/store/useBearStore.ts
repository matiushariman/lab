import { createResettableStore } from './createResettableStore';
import { devtools, persist } from 'zustand/middleware';
import {
  createSelectorHooks,
  ZustandHookSelectors,
} from 'auto-zustand-selectors-hook';

interface BearProps {
  bears: number;
}

interface BearState extends BearProps {
  increase: (by: number) => void;
}

export const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };

  return createResettableStore<BearState>()(
    devtools(
      persist(
        (set) => ({
          ...DEFAULT_PROPS,
          ...initProps,
          increase: (by) =>
            set((state) => ({ bears: state.bears + by }), false, 'increase'),
        }),
        {
          name: 'bear-storage',
        }
      )
    )
  );
};

export type BearStore = ReturnType<typeof createBearStore>;

export const selectBearStore = createSelectorHooks(
  createBearStore({})
) as BearStore & ZustandHookSelectors<BearState>;
