import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopoverDemo } from './PopoverDemo';

const Story: ComponentMeta<typeof PopoverDemo> = {
  component: PopoverDemo,
  title: 'PopoverDemo',
};
export default Story;

const Template: ComponentStory<typeof PopoverDemo> = () => <PopoverDemo />;

export const Primary = Template.bind({});
Primary.args = {};
