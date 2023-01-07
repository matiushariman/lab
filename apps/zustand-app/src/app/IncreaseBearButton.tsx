import { selectBearStore } from './store/useBearStore';
import { resetAllStores } from './store/createResettableStore';

export default function IncreaseBearButton() {
  const increase = selectBearStore.useIncrease();

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
