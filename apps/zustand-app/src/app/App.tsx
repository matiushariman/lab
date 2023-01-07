import { useRef } from 'react';
import { createBearStore } from './store/useBearStore';
import { BearContext } from './store/BearContext';

import BearsDisplay from './BearsDisplay';
import IncreaseBearButton from './IncreaseBearButton';

export function App() {
  const store = useRef(createBearStore({ bears: 2 })).current;

  return (
    <BearContext.Provider value={store}>
      <div>
        <h1>Bear Shop</h1>
        <BearsDisplay />
        <IncreaseBearButton />
      </div>
    </BearContext.Provider>
  );
}

export default App;
