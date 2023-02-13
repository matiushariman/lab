import { useAtomValue } from 'jotai';

import { priceAtom } from './price.atom';
import { AddButton } from './AddButton';

export function App() {
  const price = useAtomValue(priceAtom);

  return (
    <div>
      <div>{price}</div>
      <AddButton />
    </div>
  );
}

export default App;
