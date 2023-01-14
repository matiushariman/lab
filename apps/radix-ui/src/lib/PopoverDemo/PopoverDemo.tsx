import * as Popover from '@radix-ui/react-popover';

export const PopoverDemo = () => (
  <div className="bg-gradient-to-br from-cyan-900 to-cyan-700 h-screen flex items-center justify-around">
    <Popover.Root>
      <Popover.Trigger className="bg-white border text-sm border px-4 py-2 rounded cursor-pointer font-bold">
        Show info
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="shadow p-4 bg-white rounded-md text-sm transition">
          Some content
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>
);
export default PopoverDemo;
