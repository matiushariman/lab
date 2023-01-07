import { selectBearStore } from './store/useBearStore';

export default function BearsDisplay() {
  const bears = selectBearStore.useBears();

  return <p>{bears} bears around here</p>;
}
