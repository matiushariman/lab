import * as Popover from '@radix-ui/react-popover';
import './PopoverDemo.styles.css';

export const PopoverDemo = () => (
  <div className="PopoverWrapper">
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Some content
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>
);
export default PopoverDemo;
