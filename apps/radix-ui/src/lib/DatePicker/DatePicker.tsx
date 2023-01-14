import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-gradient-to-br from-cyan-900 to-cyan-700 h-screen flex items-center justify-around">
      <Popover.Root>
        <Popover.Trigger className="bg-white border text-sm border px-4 py-2 rounded cursor-pointer font-bold">
          {date ? format(date, 'PP') : 'Select date'}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="shadow p-4 bg-white rounded-md text-sm transition">
            <DayPicker
              mode="single"
              required
              selected={date}
              onSelect={setDate}
              modifiersClassNames={{
                selected:
                  'enabled:font-bold enabled:bg-cyan-600 enabled:text-white',
              }}
            />
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default DatePicker;
