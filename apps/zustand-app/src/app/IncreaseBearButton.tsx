import { resetAllStores } from './store/createResettableStore';
import { useBearContext } from './store/useBearContext';

export default function IncreaseBearButton() {
  const increase = useBearContext((s) => s.increase);

  return (
    <>
      <button
        onClick={() => {
          increase(1);
        }}
      >
        Increase Bears
      </button>
      <button onClick={resetAllStores}>Reset</button>
    </>
  );
}
