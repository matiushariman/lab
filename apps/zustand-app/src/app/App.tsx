import create from 'zustand';
import {
  createSelectorHooks,
  ZustandHookSelectors,
} from 'auto-zustand-selectors-hook';

import { devtools, persist } from 'zustand/middleware';

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
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

export function App() {
  const bears = selectBearStore.useBears();
  const increase = selectBearStore.useIncrease();

  return (
    <div>
      <p>{bears} around here</p>
      <button onClick={() => increase(1)}>Increase</button>
    </div>
  );
}

export default App;
