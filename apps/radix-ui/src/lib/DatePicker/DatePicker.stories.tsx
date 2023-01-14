import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from './DatePicker';

const Story: ComponentMeta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};
export default Story;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
