// Mimic the hook returned by `create`
import { useContext } from 'react';
import { useStore } from 'zustand';

import { BearContext } from './BearContext';
import { BearState } from './useBearStore';
export function useBearContext<T>(
  selector: (state: BearState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(BearContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree');
  return useStore(store, selector, equalityFn);
}
