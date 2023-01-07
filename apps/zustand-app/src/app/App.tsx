import { BearProvider } from './store/BearProvider';
import BearsDisplay from './BearsDisplay';
import IncreaseBearButton from './IncreaseBearButton';

export function App() {
  return (
    <BearProvider bears={1}>
      <div>
        <h1>Bear Shop</h1>
        <BearsDisplay />
        <IncreaseBearButton />
      </div>
    </BearProvider>
  );
}

export default App;
