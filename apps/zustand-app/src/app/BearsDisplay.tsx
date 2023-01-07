import { useBearContext } from './store/useBearContext';

export default function BearsDisplay() {
  const bears = useBearContext((s) => s.bears);

  return <p>{bears} bears around here</p>;
}
