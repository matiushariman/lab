import { useTracked } from './hooks/useValue';

export function App() {
  const [state, setState] = useTracked();

  const increment = () =>
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));

  return (
    <>
      <span>Count: {state.count}</span>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
