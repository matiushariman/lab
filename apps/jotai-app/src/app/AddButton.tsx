import { useSetAtom } from 'jotai';

import { priceAtom } from './price.atom';

export const AddButton = () => {
  const setPrice = useSetAtom(priceAtom);

  return <button onClick={() => setPrice(100)}>Set Price</button>;
};
