import { createResettableStore } from './createResettableStore';
import { devtools } from 'zustand/middleware';

export interface BearProps {
  bears: number;
}

export interface BearState extends BearProps {
  increase: (by: number) => void;
}

export const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };

  return createResettableStore<BearState>()(
    devtools((set) => ({
      ...DEFAULT_PROPS,
      ...initProps,
      increase: (by) =>
        set((state) => ({ bears: state.bears + by }), false, 'increase'),
    }))
  );
};

export type BearStore = ReturnType<typeof createBearStore>;
