import { selectBearStore } from './store/useBearStore';

export default function IncreaseBearButton() {
  const increase = selectBearStore.useIncrease();

  return (
    <button
      onClick={() => {
        increase(1);
      }}
    >
      Increase Bears
    </button>
  );
}
