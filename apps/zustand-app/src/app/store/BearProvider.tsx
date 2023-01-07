import { BearContext } from './BearContext';
import { useRef, PropsWithChildren } from 'react';
import { createBearStore, BearStore, BearProps } from './useBearStore';

type BearProviderProps = PropsWithChildren<BearProps>;

export function BearProvider({ children, ...props }: BearProviderProps) {
  const storeRef = useRef<BearStore>();
  if (!storeRef.current) {
    storeRef.current = createBearStore(props);
  }
  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
}
