import { selectBearStore } from './store/useBearStore';

export default function BearsDisplay() {
  const bears = selectBearStore.useBears();

  return <p>{bears} around here</p>;
}
